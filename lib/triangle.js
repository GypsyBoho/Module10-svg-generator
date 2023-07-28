const Shape = require('./index.js');

class Triangle extends Shape {
    constructor() {
        super();
    }
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`;
    }
}

module.exports = Triangle;