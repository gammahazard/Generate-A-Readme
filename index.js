//file system, inquirer and util packages
const inquirer = require("inquirer");
const fs = require("fs");
// file writer
const util = require("util");
// Variables to connect modules to application (generatemarkdown)
const generateMarkdown = require("./utils/generateMarkdown");
// licensebadge.js shows badges based on input of license
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/questions").questions;
//writefile
const writeFileAsync = util.promisify(fs.writeFile);

// create readme
async function init() {
  try {
    // await inquirer input in console
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    // generate markdown of input into inquirer
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("./GeneratedReadme/generated-readme.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// function call to initialize program
init();

