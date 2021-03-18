// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badges = {
    APACHE: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`,
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
  }
  
function renderLicenseBadge(license) {
  if (license = )

  // (https://opensource.org/licenses/Apache-2.0),
  // (https://opensource.org/licenses/IPL-1.0)
  // (https://opensource.org/licenses/MIT)
  // (https://opensource.org/licenses/MPL-2.0)
 
  return badges(license);
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if((renderLicenseBadge is =))
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}


## Description 

${data.description}

## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)

## License 

## Installation

To install necessary dependencies, run the following command:
​
\`\`\
${data.install}
\`\`\`
​## License

${renderLicenseSection(license)}

## Contributing 

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at tbeauchamp@2u.com. You can find more of my work at [tuckerbeauchamp](https://github.com/tuckerbeauchamp/).


`};


module.exports = generateMarkdown;
