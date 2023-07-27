// Create Triangle, Circle and Square classes
class Shape {
    constructor() {
        this.fillColor = "";
        // this.textColor = textColor;
        // this.text = text;
        // this.shape = shape;
    }

    setColor(fillColor) {
        this.fillColor = fillColor;
    }
}
class Triangle extends Shape {
    // Each shape class should have a render() method
    render() {
        return ``
    }
}
class Circle extends Shape {
    // Each shape class should have a render() method
    render() {
        return 
        `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100 r="80" fill=${this.fillColor}/>`
    }
}
class Square extends Shape {
    // Each shape class should have a render() method
    render() {
        return ``
    }
}



// Export Triangle, Circle and Square classes