/** Entry point. */
function main() {
    const quantity = Number(prompt("Number of shirts")) ?? 0;
    const message = prompt("Message");    
    const fixedShirtCost = 10;
    const unitCost = fixedShirtCost + messageCost(message);
    const sub = subtotal(quantity, unitCost);
    const taxes = calcTaxes(sub);
    const total = sub + taxes;
    alert(`Total: ${total}`);
}

main();

/**
 * Computes the taxes for the given subtotal.
 * @param {number} subtotal 
 * @returns number
 */
function calcTaxes(subtotal) {
    const fed = 0.05 * subtotal;
    const prov = 0.09975 * subtotal;
    const result = fed + prov;
    return Number(result.toFixed(2));
}

expect(calcTaxes(100)).toBe(14.98);
expect(calcTaxes(1000)).toBe(149.75);


/**
 * Computes the subtotal for the given quantity and shirt cost.
 * @param {number} quantity 
 * @param {number} unitCost 
 * @returns number
 */
function subtotal(quantity, unitCost) {
    return quantity * unitCost;
}

expect(subtotal(1, 1)).toBe(1);
expect(subtotal(2, 10)).toBe(20);

/**
 * Returns the cost of the given message.
 * @param {string} message
 * @returns {number}
 */
function messageCost(message) {
    const costPerChar = 0.50;
    const messageWithoutSpaces = message.replaceAll(" ", "");
    return messageWithoutSpaces.length * costPerChar;
}

expect(messageCost("")).toBe(0);
expect(messageCost("a")).toBe(0.50);
expect(messageCost("ab")).toBe(1.00);
expect(messageCost("a b")).toBe(1.00);