const SVG = require("./SVG");
const { Triangle } = require('./shapes');

describe("SVG", function () {
    it("renders a triangle", function () {
        const triangle = new Triangle();
        triangle.setColor('red');
        const svg = new SVG();
        svg.setText("EFG", "white");
        svg.setShape(triangle.render());
        expect(svg.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150,18 244,182 56,182" x="90" y="60" fill="red" /><text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill='white'>EFG</text></svg>`)
    });
});