const minuteDigits = document.querySelector("#minute-digits") as HTMLElement;
const hourDigits = document.querySelector("#hour-digits") as HTMLElement;
const secondDigits = document.querySelector("#second-digits") as HTMLElement;

function updateDigital(now: Date): void {
    secondDigits.textContent = String(now.getSeconds());
    hourDigits.textContent = String(now.getHours());
    minuteDigits.textContent = String(now.getMinutes());
}

const minuteHand = document.querySelector("#minute-hand") as HTMLElement;
const hourHand = document.querySelector("#hour-hand") as HTMLElement;
const secondHand = document.querySelector("#second-hand") as HTMLElement;

function updateAnalog(now: Date): void {
    const degreesPerSecond = 360 / 60;
    rotate(secondHand, now.getSeconds() * degreesPerSecond);

    const degreesPerMinute = 360 / 60;
    rotate(minuteHand, now.getMinutes() * degreesPerMinute);

    const degreesPerHour = 360 / 12;
    rotate(hourHand, now.getHours() * degreesPerHour);
}

function rotate(hand: HTMLElement, angle: number): void {
    hand.style.transform = `rotate(${angle}deg)`;
}

function updateClock(): void {
    const now = new Date();

    updateAnalog(now);
    updateDigital(now);

    if (now.getHours() < 6 || now.getHours() > 17) {
        document.body.classList.add("dark");
    }
}

updateClock();
setInterval(updateClock, 1000);
