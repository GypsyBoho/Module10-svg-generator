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
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
    }
    toString() {
        return this.render();
    }
}

class Triangle extends Shape {
    // Each shape class should have a render() method
    render() {
        // const { shapeColor } = this;
        return `<polygon points="150,18 244,182 56,182" x="90" y="60" fill="${this.fillColor}" />`;
    }
    toString() {
        return this.render();
    }
}

class Square extends Shape {
    // Each shape class should have a render() method
    render() {
        return `<rect width="120" height="120" x="90" y="40" fill="${this.fillColor}" />`;
    }
    toString() {
        return this.render();
    }
}

module.exports = {Circle, Triangle, Square};