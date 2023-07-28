// Create Triangle, Circle and Square classes
class Shape {
    constructor() {
        this.fillColor = "";
        // this.textColor = textColor;
        // this.text = text;
        // this.shape = shape;
        // this.shapeColor = shapeColor;
    }
    
    setColor(fillColor) {
        this.fillColor = fillColor;
    }
}

class Circle extends Shape {
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return 
        `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100 r="80" fill=${this.fillColor}/>`;
    }
}

class Triangle extends Shape {
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return `<polygon points="150,18 244,182 56,182" fill="${this.fillColor}" />`;
    }
}

class Square extends Shape {
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return `<rect width="200" height="200" fill="${this.fillColor}" />`;
    }
}

module.exports = {Circle, Triangle, Square}