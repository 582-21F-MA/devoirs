/**
 * Returns the first descendants of `parent` whose content matches `text`.
 * @param {HTMLElement} parent
 * @param {string} text
 * @returns {HTMLElement | null}
 */
function findChild(parent, text) {
    const descendants = Array.from(parent.querySelectorAll("*"));
    return descendants.find(d => d.textContent === text) ?? null;
}

test("return child with matching text content", () => {
    const parent = document.createElement("div");
    expect(findChild(parent, "foo")).toBe(null);

    parent.innerHTML = "<p>hello <span>foo</span></p>";
    const child = document.createElement("span");
    child.textContent = "foo";
    expect(findChild(parent, "foo")).toEqual(child);
});

/**
 * Determines if `parent` has two siblings whose content matches `text1`
 * and `text2`.
 * @param {HTMLElement} parent
 * @param {string} text1
 * @param {string} text2
 * @returns {boolean}
 */
function areSiblings(parent, text1, text2) {
    const el1 = findChild(parent, text1);
    const el2 = findChild(parent, text2);
    return el1 !== null && el2 !== null
        && el1.parentElement === el2?.parentElement;
}

test("return true if matching children are siblings", () => {
    const parent = document.createElement("div");
    parent.innerHTML = `
        <table>
            <tr>
                <td>Go</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>Zig</td>
            </tr>
        </table>
    `;
    expect(areSiblings(parent, "Go", "Java")).toBe(true);
    expect(areSiblings(parent, "Go", "Zig")).toBe(false);
    expect(areSiblings(parent, "C", "OCaml")).toBe(false);
});
