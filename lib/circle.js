const Shape = require('./index.js');

class Circle extends Shape {
    constructor() {
        super();
    }
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return 
        `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100 r="80" fill=${this.fillColor}/>`;
    }
}

module.exports = Circle