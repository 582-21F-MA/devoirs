const secondsPerMinute = 60;
const minutesPerHour = 60;
const secondsPerHour = secondsPerMinute * minutesPerHour;

const input = prompt("Nombre de secondes");
const inputInt = Number.parseInt(input) || 0; // handle letters and float in input
const inputPositiveInt = Math.abs(inputInt);

const hours = Math.floor(inputPositiveInt / secondsPerHour);
const restInSeconds = inputPositiveInt % secondsPerHour;

const minutes = Math.floor(restInSeconds / secondsPerMinute);
const seconds = restInSeconds % secondsPerMinute;

const output = `${hours} heure(s), ${minutes} minute(s) et ${seconds} seconde(s)`;

alert(output);