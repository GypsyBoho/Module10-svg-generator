const SVG = require("./SVG"); // imports the SVG class that generates a new logo instance
const { Square } = require("./shapes"); // imports the Square class that generates specificly the square shape

// sets up the test for the square SVG
describe("SVG", function() {
    // specific test case named "renders square" and the callback function has the criteria for the test to pass or fail
    it ("Renders a square", function() {
        
        const square = new Square();
        
        square.setColor("blue");
        
        // const randomLetters = generateRandomLetters(3);
        const svg = new SVG();
        
        svg.setText("ABC", "red");
        
        svg.setShape(square.render());
        
        expect(svg.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="120" height="120" x="90" y="40" fill="blue" /><text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill='red'>ABC</text></svg>`)
    });
});

// function generateRandomLetters(length) {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * letters.length);
//         result += letters.charAt(randomIndex);
//     }
//     return result;
// }
