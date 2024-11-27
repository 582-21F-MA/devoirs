const p = document.querySelector("p") as HTMLParagraphElement;

const div = document.querySelector("div") as HTMLElement;
div.addEventListener("click", handleClick);

function handleClick(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    if (element.nodeName !== "BUTTON") return;
    if (element.textContent === "CLEAR") {
        p.textContent = "";
        return;
    }
    if (p.textContent === null) return;
    if (p.textContent.length === 4) return;
    p.textContent = hide(p.textContent) + element.textContent;
}

function hide(s: string): string {
    return "*".repeat(s.length);
}
