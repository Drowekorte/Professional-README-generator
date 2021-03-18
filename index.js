// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project:',
        name: "description"
    },
    {
        type: 'input',
        message: 'Add a Table of Contents',
        name: "table"
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'License,',
        name: 'license',
        choices: [ `${APACHE}, ${IBM}, ${MIT}, ${Mozilla}`]
    },
    {
        type: 'input',
        message: 'Contributions',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    
]
// TODO: Create a function to write README file

function writeToFile (fileName, data){
    fs.writeFile(fileName, generateMarkdown(data), () => { }
    ); 
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile("README.md", data)
    }
    // generateMarkdown();


// Function call to initialize app
init();