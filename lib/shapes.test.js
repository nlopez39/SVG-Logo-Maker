const Shapes = require("./shapes");

describe("Shape", () => {
  describe("circle", () => {
    it("this is a test for circle", () => {
      const shape = new Shapes.Circle("blue");
      expect(shape.render()).toEqual(
        '<circle cx="30" cy="45" r="30" fill="blue"/>'
      );
    });
  });
});

describe("Shape", () => {
  describe("triangle", () => {
    it("this is a test for a triangle", () => {
      const shape = new Shapes.Triangle("blue");
      expect(shape.render()).toEqual(
        '<polygon points="-20,60 30,10 80,60" fill="blue"/>'
      );
    });
  });
});

describe("Shape", () => {
  describe("square", () => {
    it("this is a test for a square", () => {
      const shape = new Shapes.Square("blue");
      expect(shape.render()).toEqual(
        '<rect x="5" y="20" width="50" height="50" fill="blue"/>'
      );
    });
  });
});
