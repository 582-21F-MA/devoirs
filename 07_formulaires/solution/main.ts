const form = document.querySelector("form") as HTMLFormElement;
const nameInput = form.querySelector("#name-input") as HTMLInputElement;
const birthdayInput = form.querySelector("#birthday-input") as HTMLInputElement;
const animalSelect = form.querySelector("#animal-select") as HTMLSelectElement;
const otherLabel = form.querySelector("#other-label") as HTMLElement;
const otherInput = form.querySelector("#other-input") as HTMLInputElement;
const errorNodes = form.querySelectorAll(".error") as NodeListOf<HTMLElement>;

function toggleOther(): void {
    if (otherInput.disabled) {
        otherLabel.style.display = "block";
        otherInput.disabled = false;
    } else {
        otherLabel.style.display = "none";
        otherInput.disabled = true;
    }
}

function handleChangeAnimal(): void {
    if (animalSelect.value !== "other") return;
    toggleOther();
}

function clearErrors(): void {
    for (const node of errorNodes) {
        node.textContent = "";
        node.style.display = "none";
    }
}

function handleSubmit(event: SubmitEvent): void {
    clearErrors();
    if (!form.checkValidity()) event.preventDefault();
}

type HTMLFieldElement = HTMLInputElement | HTMLSelectElement;

function handleInvalidField(
    field: HTMLFieldElement,
    message = field.validationMessage,
): void {
    const errorNode = field.previousElementSibling as HTMLElement;
    errorNode.textContent = message;
    errorNode.style.display = "block";
}

function handleChangeBirthday(): void {
    const birthday = new Date(birthdayInput.value);
    const today = new Date();
    if (today.getFullYear() - birthday.getFullYear() >= 18) {
        birthdayInput.setCustomValidity("");
    } else {
        birthdayInput.setCustomValidity(
            "Vous devez être majeur·e pour participer",
        );
    }
    const errorNode = birthdayInput.previousElementSibling as HTMLElement;
    errorNode.textContent = "";
    birthdayInput.checkValidity();
}

function main(): void {
    toggleOther();

    form.noValidate = true;
    form.addEventListener("submit", handleSubmit);

    animalSelect.addEventListener("change", handleChangeAnimal);
    birthdayInput.addEventListener("change", handleChangeBirthday);

    nameInput.addEventListener("invalid", () => {
        handleInvalidField(nameInput, "Veuillez entrer votre nom");
    });
    birthdayInput.addEventListener("invalid", () => {
        handleInvalidField(birthdayInput);
    });
    otherInput.addEventListener("invalid", () => {
        handleInvalidField(otherInput);
    });
    animalSelect.addEventListener("invalid", () => {
        handleInvalidField(animalSelect);
    });
}

main();
