let { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected); 
})

test("One dolar should be 156.5 yenes", function () {
    const { fromEuroToYen } = require('./app.js');

    const yen = fromEuroToYen(1);

    const expected = 1 * 156.5;

    expect(yen).toBe(expected); 
})

test("One yen should be 0.87 pounds", function () {
    const { fromEuroToPound } = require('./app.js');

    const pound = fromEuroToPound(1);

    const expected = 1 * 0.87;

    expect(pound).toBe(expected); 
})