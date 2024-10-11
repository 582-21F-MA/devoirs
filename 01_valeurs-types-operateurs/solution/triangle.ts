// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

function createTriangle(height: number): string {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += "#".repeat(i + 1) + "\n";
    }
    return triangle;
}

test("should produce a triangle", () => {
    const actual = createTriangle(3);
    const expected = "#\n##\n###\n";
    expect(actual).toBe(expected);
});

function main(): void {
    const height = Number(prompt("Enter a height:"));
    const triangle = createTriangle(height);
    console.log(triangle);
}

main();
