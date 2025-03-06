const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromEuroToYen = function(valueInDollar) {

    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromEuroToPound = function(valueInYen) {

    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

let sum = (a, b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound };