//include shapes
const Shape = require("./lib/shapes");
//include inquirer
const inquirer = require("inquirer");

//instances of Circle, Triangle, Square
const circle = new Shape.Circle(50);
const triangle = new Shape.Triangle(10, 20, 90);
const square = new Shape.Square(50, 50);

//create the questions
var questions = [
  {
    type: "input",
    message: "Enter 3 letters: ",
    name: "logo",
  },
  {
    type: "input",
    message: "Enter a color for the text: ",
    name: "logoColor",
  },
  {
    type: "checkbox",
    message: "Pick a shape: ",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Enter a color for the Shape: ",
    name: "shapeColor",
  },
];

//use inquirer
inquirer.prompt(questions).then((data) => {
  //then take that data and save it to an object
  const userInput = data;
  console.log(userInput.logo);
  //now take all of the individual information from user input and include it to an svg file?
  //check what shape user chose
});
