//include shapes
const Shape = require("./lib/shapes");
//include inquirer
const inquirer = require("inquirer");
const fs = require("fs");

//function to write an SVG file
function writeToFile(file, data) {
  //file starts as an empty string
  let svgString = "";
  //set the width and height of the logo container
  svgString = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">';
  //TODO: add LOGO Text here
  //text was not showing up in shape, need to place them in a group
  svgString += "<g>";
  //checks what shape users want and to add that to the SVG file

  if (data.shape[0] === "Circle") {
    svgString += new Shape.Circle(data.shapeColor).render();
  } else if (data.shape[0] === "Triangle") {
    svgString += new Shape.Triangle(data.shapeColor).render();
  } else {
    svgString += new Shape.Square(data.shapeColor).render();
  }
  //ADD THE TEXT HERE
  var text = data.logo;
  svgString += `<text x="30" y="53" font-family="arial" font-size="20" fill="${
    data.logoColor
  }" >${text.toUpperCase()}</text>`;
  //close the group
  svgString += "</g>";
  //close the svg element
  svgString += "</svg>";

  fs.writeFile(file, svgString, (err) => {
    err
      ? console.log(err)
      : console.log(
          "Generated Successfully! Look for your logo in the 'examples' folder & 'Open with Default Browser'"
        );
  });
}

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
  //now take all of the individual information from user input and include it to an svg file?
  writeToFile("./examples/testSVG.svg", data);
});
