/**
 * Returns a tic-tac-toe board.
 * @returns {HTMLElement}
 */
function createBoard() {
    const board = document.createElement("div");
    for (let i = 0; i < 9; i++) {
        const button = document.createElement("button");
        board.append(button);
    }
    let nextSymbol = "X";
    board.addEventListener("click", (event) => {
        const button = event.target;
        if (!(button instanceof HTMLButtonElement)) return;
        const isOccupied = button.textContent !== "";
        if (isOccupied) return;
        button.textContent = nextSymbol;
        nextSymbol = nextSymbol === "X" ? "O" : "X";
    });
    return board;
}

test("create 9 buttons", () => {
    const board = createBoard();
    const buttons = board.querySelectorAll("button");
    expect(buttons.length).toBe(9);
});
test("clicking on a button adds a symbol", () => {
    const board = createBoard();
    const buttons = board.querySelectorAll("button");
    buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(buttons[0].textContent).toBe("X");
});
test("symbol alternates between X and O", () => {
    const board = createBoard();
    const buttons = board.querySelectorAll("button");
    buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(buttons[0].textContent).toBe("X");
    buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(buttons[1].textContent).toBe("O");
    buttons[3].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(buttons[3].textContent).toBe("X");
});
test("clicking on a button with a symbol does nothing", () => {
    const board = createBoard();
    const buttons = board.querySelectorAll("button");
    buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(buttons[0].textContent).toBe("X");
    buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(buttons[0].textContent).toBe("X");
});

document.body.append(createBoard());

// Créer 9 boutons
// Enregistrer un gestionnaire sur la grille
// Lors du clic, ajoutez symbole dans le bouton (alterner entre X et O)
// TODO: Vérifier si c'est la fin du jeu
// Ajouter la grille de jeu au DOM
