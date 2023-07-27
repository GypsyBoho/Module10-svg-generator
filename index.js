// import fs, inquirer
const fs = require('fs');
const { choices } = require('yargs');

// prompt questions inquirer
this.questions = [];
.prompt ([
    {
        type: 'input',
        name: 'letters',
        message: 'Enter up to 3 letters to appear centered in the svg shape.',
    },
    {
        type: 'input',
        name: 'text color',
        message: 'What color do you want the text?',
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Which shape would you like?'
        choices: ['circle, triangle, square']
    },
    {
        type: 'input',
        name: 'shape color',
        message: 'What color do you want the shape to be?'
    }
])
    // text (up to 3 char) edge case for more than 3 char
    // text color (edge case for word not color)
    // list of shapes (circle, triangle, square)
    // shape colors (edge case for word not color)
// cannot progress until this^ is complete

// generate content of file

// write file

function createText(fillColor, text) {
    // return string with HTML tag fillColor and text
}

const data =