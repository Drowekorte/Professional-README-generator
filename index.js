// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown, badges} = require("./utils/generateMarkdown.js");



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
    // {
    //     type: 'input',
    //     message: 'Installation',
    //     name: 'installation'
    // },
    // {
    //     type: 'input',
    //     message: 'Usage',
    //     name: 'usage'
    // },
    // {
    //     type: 'list',
    //     message: 'License,',
    //     name: 'license',
    //     choices: ["APACHE", "IBM", "MIT", "Mozilla"]
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the appropriate license.',
        choices: [
            { 
                name: 'APACHE',
                value: {
                    name: 'APACHE',
                    link: 'APACHE',
                    url: 'https://opensource.org/licenses/Apache-2.0',
                    color: 'blue',
                },
            },
            { 
                name: 'IBM',
                value: {
                    name: 'IBM',
                    link: 'IBM',
                    url: 'https://img.shields.io/badge/License-IPL%201.0-blue.svg',
                    color: 'blue',
                },
            },
            { 
                name: 'MIT',
                value: {
                    name: 'MIT',
                    link: 'MIT',
                    url: 'https://img.shields.io/badge/License-MIT-yellow.svg',
                    color: 'yellow',
                },
            },
            { 
                name: 'Mozilla',
                value: {
                    name: 'Mozilla',
                    link: 'Mozilla',
                    url: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
                    color: 'green',
                },
            },
        ] 
    },
    // {
    //     type: 'input',
    //     message: 'Contributions',
    //     name: 'contributions'
    // },
    // {
    //     type: 'input',
    //     message: 'Tests',
    //     name: 'tests'
    // },
    // {
    //     type: 'input',
    //     message: 'What is your email address?',
    //     name: 'email'
    // },
    // {
    //     type: 'input',
    //     message: 'What is your GitHub username?',
    //     name: 'username'
    // },
    
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
        writeToFile("README3.md", data)
    })
    // generateMarkdown();


// Function call to initialize app
}

init()