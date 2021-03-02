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
  // a description, installation instructions, usage information, contribution guidelines, and test instructions
  inquirer
    .prompt([
      {
        message: "What is the title of your project?",
        name: "title",
        default: "Best Project",
      },
      {
        message: "Choose a license",
        name: "licenseUsed",
        type: "list",
        choices: ["Mit", "gpl", "isc", "mpl-2.0", "unlicense"],
        default: "unlicense",
      },
      {
        message: "Who contributed in creating this?",
        name: "contribution",
        default: "ACME Corporation",
      },
      { message: "Date Created?", name: "dateCreated", default: "2021" },
      {
        message: "Enter a short description of your project?",
        name: "description",
        default: "The next big thing",
      },
      {
        message: "Install instructions?",
        name: "Install",
        default: "npm install",
      },
      {
        message: "How will people use this application?",
        name: "Usage",
        default:
          "This application will help developers create a good starter README.md",
      },
      {
        message: "What is the user github email address?",
        name: "github",
        type: "input",
        validate: function (value) {
          const valid = typeof value === "string" && value.length > 0;
          return valid || "Please enter your GitHub profile account name";
        },
      },
      {
        message: "any additional collaborators?",
        name: "collab",
        default: "None",
      },
    ])
    .then((answers) => {
      console.log(answers);
      //write more code here to do something with returned object
      useTemplate(answers);
    });
}

function useTemplate(answers) {
  let finalTemp = template;
  Object.keys(answers).forEach(function (key) {
    const regex = new RegExp("{{" + key + "}}", "g");
    finalTemp = finalTemp.replace(regex, answers[key]);
  });
  fs.writeFileSync(__dirname + "/output/readme.md", finalTemp, "utf8");
}
