const SVG = require("./SVG")
const { Circle } = require('./shapes')

describe("SVG", function() {
    it ("renders a circle", function() {
        const circle = new Circle()
        circle.setColor("green")
        const svg = new SVG()
        svg.setText("ABC", "blue")
        svg.setShape(circle.render())
        expect(svg.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="green" /><text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill='blue'>ABC</text></svg>`)
    })
})