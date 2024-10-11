// @ts-ignore
import { test, expect } from "https://maxime-pigeon.github.io/t/test.js";

/**
 * Create a chessboard with the given `width` and `height`.
 */
function createChessboard(width: number, height: number): string {
    let chessboard = "";
    for (let y = 0; y < height; y++) {
        const row = createRow(y, width);
        chessboard += row + "\n";
    }
    return chessboard;
}

test("create chessboard", () => {
    const actual = createChessboard(3, 3);
    const expected = " # \n# #\n # \n";
    expect(actual).toBe(expected);
});

/**
 * Create a row of the given `width` at the given `y`.
 */
function createRow(y: number, width: number): string {
    let row = "";
    for (let x = 0; x < width; x++) {
        const pos = y + x;
        const char = pos % 2 ? "#" : " ";
        row += char;
    }
    return row;
}

test("row starts with space", () => {
    const actual = createRow(0, 3);
    const expected = " # ";
    expect(actual).toBe(expected);
});

test("row starts with #", () => {
    const actual = createRow(1, 3);
    const expected = "# #";
    expect(actual).toBe(expected);
});

function main(): void {
    const width = Number(prompt("Enter a width:"));
    const height = Number(prompt("Enter a height:"));
    const chessboard = createChessboard(width, height);
    console.log(chessboard);
}

main();
