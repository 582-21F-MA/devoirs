function main() {
    document.body.append(createPinPad());
}

main();

/**
 * Creates a PIN pad.
 * @returns {HTMLElement}
 */
function createPinPad() {
    let pin = "";

    const p = document.createElement("p");
    const div = document.createElement("div");

    div.addEventListener("click", event => {
        if (!(event.target instanceof HTMLButtonElement)) return;

        const maxPinLength = 4;
        const label = event.target.textContent;

        if (label === "clear") pin = "";
        else if (pin.length >= maxPinLength) return;
        else pin += label;

        p.textContent = hidePIN(pin);
    });

    const labels = ["7", "8", "9", "4", "5", "6", "3", "2", "1", "0", "clear"];
    const buttons = labels.map(label => {
        const button = document.createElement("button");
        button.textContent = label;
        return button;
    });

    div.append(p, ...buttons);
    return div;
}

test("display the PIN in a paragraph as the buttons are clicked", () => {
    const pad = createPinPad();
    const display = pad.querySelector("p");
    const buttons = Array.from(pad.querySelectorAll("button"));

    const clickOn = (label) =>
        buttons.find(b => b.textContent === label).dispatchEvent(
            new MouseEvent("click", { bubbles: true }),
        );

    expect(display.textContent).toBe("");
    clickOn("1");
    expect(display.textContent).toBe("1");
    clickOn("2");
    expect(display.textContent).toBe("*2");
    clickOn("3");
    expect(display.textContent).toBe("**3");
    clickOn("4");
    expect(display.textContent).toBe("***4");
    clickOn("5");
    expect(display.textContent).toBe("***4");
    clickOn("clear");
    expect(display.textContent).toBe("");
});

/**
 * Hides all but the last digit of the given PIN.
 * @param {string} pin
 * @returns {string}
 */
function hidePIN(pin) {
    if (pin.length === 0) return "";
    const starCount = pin.length - 1;
    const lastDigit = pin[pin.length - 1];
    const stars = starCount < 1 ? "" : "*".repeat(starCount);
    return stars + lastDigit;
}

expect(hidePIN("1234")).toBe("***4");
expect(hidePIN("123")).toBe("**3");
expect(hidePIN("12")).toBe("*2");
expect(hidePIN("1")).toBe("1");
expect(hidePIN("")).toBe("");
