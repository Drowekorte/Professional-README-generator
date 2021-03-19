// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badges = {
  "APACHE": `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`,
  "IBM": '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)',
  "MIT": '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  "Mozilla": '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
}

function renderLicenseBadge(license) {

  return badges[license];

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const links = {
  "APACHE": `https://opensource.org/licenses/Apache-2.0`,
  "IBM": `https://opensource.org/licenses/IPL-1.0`,
  "MIT": `https://opensource.org/licenses/MIT`,
  "Mozilla": `https://opensource.org/licenses/MPL-2.0`

}

function renderLicenseLink(license) {

  return links[license];

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}


## Description 

${data.description}

## Table of Contents 
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

This project uses the ${data.license} license.

## <a name="installation"></a> Installation

To install necessary dependencies, run the following command:
​
\`\`\`
${data.install}
\`\`\`

​## <a name="license"></a> License 

${renderLicenseLink(data.license)}

## Contributing 

${data.contributions}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email} You can find more of my work at ${data.username}.


`};


module.exports = generateMarkdown


