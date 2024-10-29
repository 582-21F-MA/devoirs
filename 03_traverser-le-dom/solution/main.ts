// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type elementNode = 1;
type textNode = 3;
type commentNode = 8;
type nodeType = elementNode | textNode | commentNode;

function countNodes(type: nodeType, parent: HTMLElement) {
    let total = 0;

    function walk(n: Node): void {
        if (n.nodeType === type) total++;
        if (n.nodeType === Node.TEXT_NODE) return;
        if (n.nodeType === Node.COMMENT_NODE) return;
        for (const child of n.childNodes) {
            walk(child);
        }
    }

    walk(parent);
    return total;
}

test("should count the total number of nodes", () => {
    const parser = new DOMParser();
    const html =
        "<html><p>Je suis un <em>exemple</em>.</p> <!-- commentaire --></html>";
    const mockDocument = parser.parseFromString(html, "text/html");
    expect(countNodes(Node.ELEMENT_NODE, mockDocument.body)).toBe(3);
    expect(countNodes(Node.TEXT_NODE, mockDocument.body)).toBe(4);
    expect(countNodes(Node.COMMENT_NODE, mockDocument.body)).toBe(1);
});

function main(): void {
    const root = document.documentElement;

    const elementNodes = countNodes(Node.ELEMENT_NODE, root);
    const textNodes = countNodes(Node.TEXT_NODE, root);
    const commentNodes = countNodes(Node.COMMENT_NODE, root);

    console.log(
        `Element: ${elementNodes}\nText: ${textNodes}\nComment: ${commentNodes}`,
    );
}

main();
