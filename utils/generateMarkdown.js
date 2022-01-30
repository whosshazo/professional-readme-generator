// TODO: Create a function that returns a license badge based on which license is passed in

const { NONAME } = require("dns");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  
  
  switch(license) {
    case "MIT":
      badge = "![License](https://img.shields.io/badge/LICENSE-MIT-brightgreen)";
    break;
    case "GPL 3.0":
      badge = "![License](https://img.shields.io/badge/LICENSE-GPL%203.0-red)";
    break;
    case "Apache 2.0":
      badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    break;
    case "BSD 3":
      badge = "![License](https://img.shields.io/badge/LICENSE-BSD%203-green)";
    break;
    case "LGPL 2.1":
      badge = "![License](https://img.shields.io/badge/LICENSE-LGPL%202.1-orange)"
    break;
    case "N/A":
      badge = "";
      break;
    default: 
    badge = "";
  
  }
  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)

  return `# 
  ${badge}

  # Title:
    ${data.title}


## Description:
  ${data.description}

## Table of Contents:
  1.[Installation](#installation)
  2.[Usage](#usage)
  3.[Tests](#tests)
  5.[Contribution](#contribution)
  6.[License](#license)

## Installation:
  ${data.installation}


## Usage:
  ${data.usage}

## Tests:
  ${data.test}


## Contribution:
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License:
  ${data.license}
  ${badge}

## Questions: 
  Please direct any questions to <a href=mailto:${data.question}>Email: ${data.question}</a>

  Please view my GitHub account for further documentation 
  


`;
}

module.exports = generateMarkdown;
