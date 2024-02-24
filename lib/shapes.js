class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
class Triangle {
  constructor(vertex1, vertex2, vertex3) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.vertex3 = vertex3;
  }
}

class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};
