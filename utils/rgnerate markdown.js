// TODO: Create a function that returns a license badge based on which license is passed in 
//  If there is no license, return an empty string
// shiled.io website to get badges
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
//  If there is no license, return an empty string
function renderLicenseLink(license) {
    return `[license] (https://www.license.com)`
}

// TODO: Create a function that returns the license section of README
//  If there is no license, return an empty string
function renderLicenseSection(license) {
return `
## License
 This project is license with ${license} `
}
// TODO: Create a function to generate  markdown for README 
function generateMarkdown(data) {
    return `# ${data.title}
    ## Description
    ${data.description}
    // add links to the 3 * down below
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)

    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown; 