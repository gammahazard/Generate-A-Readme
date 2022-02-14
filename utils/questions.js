// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Please provide a one-sentence description describing your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide details about your project",
    name: "about",
  },
  {
    type: "input",
    message: "Please provide testing instructions (if any)",
    name: "test",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the link to clone the repo?",
    name: "clone",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache License 2.0",
      "Boost",
      "BSD 2-Clause 'simplified'",
      "BSD 2-Clause 'new or revised",
      "Creative Commons Zero v1.0",
      "Eclipse Public License 2.0",
      "The Unlicense",
      

    ],
  },
  
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email?",
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
];

module.exports = {
  questions:questions,
};
