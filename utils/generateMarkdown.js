// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.description}

  ${data.licenseBadge}

  [A deployed version can be viewed here.:]
  
  (${data.URL})
  
---

  # Contents

  1. [Details about my project](#about)
      1. [Visuals](#visuals)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Testing](#test)
  5. [Creator(s)](#creators)
  6. [Contributions](#contributions)

---

## About

  ${data.about}

---

## Visuals:

  ![]()

---

## Installation:
  ${data.installation}

  To clone the repo:
  
      git clone ${data.clone}
  
---

  ## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Test
  ${data.test}

---

---

## Creator(s)
  ${data.author}

---

---

## Contributions
  To contribute to this application, create a pull request.
  - Fork the interested repo
  - Create a new branch for indicated feature
  - Commit new feature
  - Push your branch
  - Create a new pull request
  Upon review, your feature will be merged!

---

## Contact:
    *GitHub Username: ${data.userName}
    *GitHub Email: ${data.userEmail}
  
`;
}

module.exports = generateMarkdown;
