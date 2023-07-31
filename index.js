// import fs, inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const SVG = require("./lib/SVG.js")

async function createLogo() {
    const shapeChoices = ['Circle', 'Triangle', 'Square'];

    let selectedShape;

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'letters',
                message: 'Enter up to 3 letters to appear centered in the svg shape.',
                validate: function (input) {
                    return input.length <= 3 || 'Please enter exactly 3 characters.';
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color do you want the text (use a keyword(black, white, red blue) or #hexadecimal)?',
            },
            {
                type: 'list',
                name: 'shapes',
                message: 'Which shape would you like?',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color do you want the shape to be (use a keyword(black, white, red blue) or #hexadecimal)?'
            }
        ])
        .then((answers) => {
            const { text, textColor, shapes, shapeColor } = answers;
            let selectedShape;
            switch (shapes) {
                case 'circle':
                    selectedShape = new Circle();
                    break;
                case 'triangle':
                    selectedShape = new Triangle();
                    break;
                case 'square':
                    selectedShape = new Square();
                    break;
                default:
                    console.log('Invalid shape selection')
                    return;
            }
            selectedShape.setColor(shapeColor);

            const mySVG = new SVG()
            mySVG.setText(text, textColor);
            mySVG.setShape(selectedShape);
            const svgContent = mySVG.render();
            // return
            fs.writeFile("./examples/logo.svg", svgContent, (err) => {
                if (err) throw err;
                console.log('Generated logo.svg');
            });

        })

}
createLogo();

// init();

// generate content of file

// write file
// fs.writeFile('logo.svg', svgContent, (err) => {
//     if (err) throw err;
//     console.log('Generated logo.svg');
// })

// function createText(fillColor, text) {
//     const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${selectedShape.render()}<text x="50%" y="50%" text-anchor="middle" fill="${selectedShape.textColor}" font-size="40">${selectedShape.text}</text></svg>`;
//     // return string with HTML tag fillColor and text
// }

// generateLogo();

 // text (up to 3 char) edge case for more than 3 char
    // text color (edge case for word not color)
    // list of shapes (circle, triangle, square)
    // shape colors (edge case for word not color)/