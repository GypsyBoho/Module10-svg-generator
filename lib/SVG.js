

class SVG {
    constructor() {
        this.logoText = "";
        this.logoShape = "";
    }

    render() {

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.logoShape}${this.logoText}</svg>`
    }

    setText(text, color) {
        
        this.logoText = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill='${color}'>${text}</text>`
    }

    setShape(shape) {
        
        this.logoShape = shape
    }

}

module.exports = SVG