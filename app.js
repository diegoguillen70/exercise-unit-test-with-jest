// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// one euro is:
/*
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}*/


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen (dollarAmount){
    return parseFloat(((dollarAmount / oneEuroIs.USD) * oneEuroIs.JPY).toFixed(1));
}

function fromEuroToDollar(euroAmount){
    return parseFloat((euroAmount * oneEuroIs.USD).toFixed(1));
}

function fromYenToPound(yenAmount){
    return parseFloat(((yenAmount / oneEuroIs.JPY) * oneEuroIs.GBP).toFixed(1));
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
