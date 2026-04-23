function main() {
    const date = prompt("Date (YYYY/MM/DD) :");
    const locale = prompt("Langue (fr/en) :");
    alert(weekday(date, locale));
}

main();

/**
 * Returns the day of the week for a given date in the given locale (en/fr),
 * or an error message if the date or locale is invalid.
 * @param {string} date
 * @param {string} locale
 * @returns {string}
 */
function weekday(date, locale) {
    const dateObj = new Date(date);

    const isDateInvalid = Number.isNaN(dateObj.getTime());
    if (isDateInvalid) return "Erreur : date invalide.";

    const isLocaleInvalid = !(locale === "fr" || locale == "en");
    if (isLocaleInvalid) return "Erreur : language invalide.";

    return dateObj.toLocaleDateString(locale, { weekday: "long" });
}

expect(weekday("2026/04/22", "fr")).toBe("mercredi");
expect(weekday("2026/04/22", "en")).toBe("Wednesday");
expect(weekday("invalid", "fr")).toBe("Erreur : date invalide.");
expect(weekday("2026/04/22", "es")).toBe("Erreur : language invalide.");
