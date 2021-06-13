//Create a function (or write a script in Shell) that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {
    return (number % 2 === 0) ? "Even" : "Odd"
}

const assert = require("chai").assert;
describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(even_or_odd(2), "Even")
        assert.strictEqual(even_or_odd(0), "Even")
        assert.strictEqual(even_or_odd(7), "Odd")
        assert.strictEqual(even_or_odd(1), "Odd")
    });
});
