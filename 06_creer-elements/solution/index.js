/**
 * Returns a <time> with the time in `now`.
 * @param {Date} now
 * @returns {HTMLTimeElement}
 */
function dateToHTML(now) {
    const time = document.createElement("time");
    time.append(now.toLocaleTimeString("en-GB"));

    const isDay = now.getHours() > 8 && now.getHours() <= 20;
    if (isDay) {
        time.classList.add("day");
    } else {
        time.classList.add("night");
    }

    return time;
}

test("produce a <time> for the given date", () => {
    const time1 = dateToHTML(new Date("1995-12-17T09:24:00"));
    expect(time1.outerHTML).toBe('<time class="day">09:24:00</time>');

    const time2 = dateToHTML(new Date("2026-12-21T22:15:10"));
    expect(time2.outerHTML).toBe('<time class="night">22:15:10</time>');
});

function main() {
    const body = document.querySelector("body");
    setInterval(() => {
        const now = new Date();
        const time = dateToHTML(now);
        body.replaceChildren(time);
    }, 1000);
}

main();
