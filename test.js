// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test

test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yenes", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(3.5)

    // if 1 dollar is 0.8 euros and 1 euro is 127.9 yenes, then 3.5 dollars should be ((3.5/1.2) * 127.9)
    const expected = ((3.5/1.2) * 127.9); 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.0); 
})


test("One Yen should be 0.8 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromYenToPound(350)

    // if 127.9 yenes is 1 euros and 1 euro is 0.8 pound, then 350 yenes should be ((350/127.9) * 0.8)
    const expected = ((350/127.9) * 0.8); 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(350)).toBe(2.2); 
})
