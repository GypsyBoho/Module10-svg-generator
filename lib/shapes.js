// Create Triangle, Circle and Square classes
class Shape {
    constructor() {
        this.fillColor = "";
        this.textColor = textColor;
        this.text = text;
        this.shape = shape;
        this.shapeColor = shapeColor;
// do I need a render here?
    }
    render() {
        // class will be overwridden by children classes (circle, triangle, square)
    }

    setColor(fillColor) {
        this.fillColor = fillColor;
    }
}





module.exports = Shape;
// module.exports = Triangle;
// module.exports = Circle;
// Export Triangle, Circle and Square classes