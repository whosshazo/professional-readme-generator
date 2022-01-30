// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will the user install your app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the best use of this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license best associated with your application?',
        choices: ['MIT','GPL 3.0','Apache 2.0','BSD 3','LGPL 2.1', 'N/A']
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instrutions for your application'
    },
    {
        type: 'input',
        name: 'question',
        message: 'Please provide your Email for future questions.',
        validate:nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your Email!')
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub account',
        validate:nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub Account!')
            }
        }
        
    }

    
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
