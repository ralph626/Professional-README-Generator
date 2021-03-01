const inquirer = require("inquirer");
const fs = require("fs");
const template = fs.readFileSync(__dirname + "/template.md", "utf8");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  console.log("welcome to node!");
  //inquirer logic here\
  // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  inquirer
    .prompt([
      {
        message: "What is the title of your project?",
        name: "title",
        default: "Best Project",
      },
      {
        message: "Choose a license",
        name: "license",
        type: "list",
        choices: ["mit", "gpl"],
        default: "mit",
      },
      {
        message: "Who was involved in creating this?",
        name: "involved",
        default: "Good People",
      },
      { message: "Date Created?", name: "dateCreated", default: "2021" },
      {
        message: "Enter a short description of your project?",
        name: "description",
        default: "The next big thing",
      },
      {
        message: "Install insructions?",
        name: "Install",
        default: "npm install",
      },
    ])
    .then((answers) => {
      console.log(answers);
      //write more code here to do something with returned object
      useTemplate(answers);
    });
}
// new Promise((resolve, reject) => {
//   reject();
// })
//   .then((message) => console.log(message))
//   .catch((err) => console.log("something wen wrong"));
// // function call to initialize program
init();

// for (let index = 0; index < 50000; index++) {
//   console.log(index);
// }

function useTemplate(answers) {
  let finalTemp = template;
  Object.keys(answers).forEach(function (key) {
    finalTemp = finalTemp.replace("{{" + key + "}}", answers[key]);
  });
  fs.writeFileSync(__dirname + "/output/readme.md", finalTemp, "utf8");
}
