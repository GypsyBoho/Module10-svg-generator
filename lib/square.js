const Shape = require('./index.js');

class Square extends Shape {
    constructor() {
        super();
    }
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return `<rect width="200" height="200" fill="${shapeColor}" />`;
    }
}

module.exports = Square