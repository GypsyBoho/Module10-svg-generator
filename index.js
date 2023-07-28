// import fs, inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js')
const Triangle = require('./lib/triangle.js')
const Square = require('./lib/square.js')
const { shapes } = require('circle', 'triangle', 'square');

async function createLogo() {
    const shapeChoices = ['Circle', 'Triangle', 'Square'];
    // is this the right place to put the choices?

    const userInput = await inquirer.prompt([])
    // prompt questions inquirer
    this.questions = [];
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'letters',
                message: 'Enter up to 3 letters to appear centered in the svg shape.',
                validate: function (input) {
                    return input.length <= 3 === true ; 'Please enter exactly 3 characters.';
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
                choices: ['circle, triangle, square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color do you want the shape to be (use a keyword(black, white, red blue) or #hexadecimal)?'
            }
        ]);

    // cannot progress until this^ is complete

    const shape = userInput.shape;
    // do I need this^ if shapes has choices instead of an input?
    const text = userInput.text;
    const textColor = userInput.textColor;
    const shapeColor = userInput.shapeColor;


    
.then((answers)) => {
        const { text, textColor, shape, shapeColor } = answers;
        let logoSVG = '';
        switch (shape) {
            case 'circle':
                selectedShape = new Circle();
                Circle.setColor(shapeColor);
                logoSVG = circle.render();
                break;
            case 'triangle':
                selectedShape = new Triangle();
                Triangle.setColor(shapeColor);
                logoSVG = Triangle.render();
                break;
            case 'square':
                selectedShape = new Square();
                Square.setColor(shapeColor);
                logoSVG = Square.render();
                break;
                return;
        }

        selectedShape.setText(text);
        selectedShape.setTextColor(textColor);
        selectedShape.setShapeColor(shapeColor);

        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${selectedShape.render()}
<text x="50%" y="50%" text-anchor="middle" fill="${selectedShape.textColor}" font-size="40">${selectedShape.text}</text></svg>`;
    }
}
// generate content of file

// write file
fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
})

function createText(fillColor, text) {
    // return string with HTML tag fillColor and text
}

generateLogo();

 // text (up to 3 char) edge case for more than 3 char
    // text color (edge case for word not color)
    // list of shapes (circle, triangle, square)
    // shape colors (edge case for word not color)