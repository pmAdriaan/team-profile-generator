<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>TEAM-PROFILE-GENERATOR</h1>
<h3>◦ Building teams. Creating profiles. Powering success.</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" alt="NODE JS" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat-square&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/pmAdriaan/team-profile-generator?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/pmAdriaan/team-profile-generator?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/pmAdriaan/team-profile-generator?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/pmAdriaan/team-profile-generator?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#%EF%B8%8F-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running Team Profile Generator](#-running-team-profile-generator)
    - [🧪 Tests](#-tests)
    - [🌐 Live Team Profile Generator](#-live-demo-team-profile-generator)
    - [📸 Screenshot Team Profile Generator](#--screenshot-team-profile-generator)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The team-profile-generator repository is a command-line application that generates a visually appealing and well-structured HTML file for a team profile. It uses inquirer prompts to gather information about team members and create instances of different classes such as Manager, Engineer, and Intern. The generated HTML file includes employee cards with details such as name, ID, email, and role-specific information. It also includes Bootstrap CSS for styling and provides the flexibility to customize the output filename.

---

## 📦 Features

|    | Feature            | Description                                                                                                                                                                                                                  |
|----|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architecture, organized into separate files for each class (Employee, Engineer, Intern, Manager) in the `lib` folder. Each class has its own file with dedicated methods and properties, promoting code reusability and separation of concerns. The entry point of the application is `index.js`, which handles the user prompts and generates the team profile HTML file.                         |
| 📄 | **Documentation**  | The repository includes a `README.md` file that provides a brief overview of the project and instructions on how to run it.  |
| 🔗 | **Dependencies**   | The codebase relies on external libraries such as `inquirer` for user input and `jest` for testing. It also utilizes built-in modules like `fs` and `path` for file system operations. No major external systems or services are integrated.                                                                                           |
| 🧩 | **Modularity**     | The codebase is separating each class into its own file under the `lib` directory. This organization allows for easier maintenance, code reuse, and testing. The `src` directory contains the page template and CSS file, promoting separation of concerns and a clean code structure.                                  |
| 🧪 | **Testing**        | The code includes a comprehensive suite of tests written with `jest`. Each class (Employee, Engineer, Intern, Manager) has its own corresponding test file in the `__tests__` directory. These tests cover the functionalities and edge cases of each class, ensuring code stability and correctness.                                                                        |
| ⚡️  | **Performance**    | The codebase doesn't have any specific optimizations for performance. However, since it's a command-line application and not a web application, the performance impact is minimal. The main focus of the code is to correctly generate an HTML file based on user input, which it accomplishes efficiently.                                |
| 🔐 | **Security**       | The codebase doesn't contain any explicit security measures. However, since it's a command-line application and doesn't handle sensitive data or interact with external systems, the security risks are low. |
| 🔀 | **Version Control**| The codebase uses Git/GitHub for version control.         |
| 🔌 | **Integrations**   | The codebase doesn't integrate with any external systems or services. It primarily focuses on generating a team profile HTML file.

---


## 📂 Repository Structure

```sh
└── team-profile-generator/
    ├── __tests__/
    │   ├── Employee.test.js
    │   ├── Engineer.test.js
    │   ├── Intern.test.js
    │   └── Manager.test.js
    ├── index.js
    ├── lib/
    │   ├── Employee.js
    │   ├── Engineer.js
    │   ├── Intern.js
    │   └── Manager.js
    ├── output/
    │   └── demoTeam.html
    ├── package-lock.json
    ├── package.json
    ├── questions.js
    └── src/
        ├── page-template.js
        └── style.css

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [index.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/index.js)                           | This code is a command-line application that generates a team profile HTML file based on user input. It uses a series of inquirer prompts to gather information about the team members, including the manager, engineers, and interns. The gathered information is then used to create instances of the Manager, Engineer, and Intern classes from the lib folder. The generated HTML file is then written to the output directory with the filename specified by the user or using the default filename team.html.                                                                                                                                                                               |
| [package-lock.json](https://github.com/pmAdriaan/team-profile-generator/blob/main/package-lock.json)         | The code is a directory tree of a team profile generator project. It includes test files, source code files, a page template, and a style file. The package-lock.json file lists the dependencies, including inquirer for user input and jest for testing.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [package.json](https://github.com/pmAdriaan/team-profile-generator/blob/main/package.json)                   | The code consists of a directory tree structure that includes test files, source code files, and output files. The package.json file specifies the dependencies required for the code, including inquirer and jest.                                                                                                                                                                                                         |
| [questions.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/questions.js)                   | This code defines a set of questions to be used in a team profile generator. There are separate sets of questions for the team manager, engineer, and intern roles. The questions include input fields for names, employee IDs, email addresses, and specific information like office number for managers, GitHub username for engineers, and school for interns. The code also includes options for choosing the role of a team member and deciding whether to add another team member.                                                                                                                                                                                                          |
| [Employee.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/lib\Employee.js)                 | The code represents the definition and exporting of the `Employee` class. The class has properties for `name`, `id`, and `email`, and methods for retrieving these properties. The `getRole()` method returns `Employee` to indicate the role of the object.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Engineer.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/lib\Engineer.js)                 | The code defines and exports the `Engineer` class, which inherits from the `Employee` class. The `Engineer` class has a constructor that takes in the `name`, `id`, `email`, and `github` parameters. It has two methods-`getRole()` which returns the role of Engineer and `getGithub()` which returns the engineer's github username.                                                                                                                                                                                                                                                                                                                                                           |
| [Intern.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/lib\Intern.js)                     | This code defines and exports the `Intern` class, which inherits from the `Employee` class. The Intern class takes in the parameters `name`, `id`, `email`, and `school`. It has two methods: `getRole()`, which returns `Intern`, and `getSchool()`, which returns the value of `this.school`.                                                                                                                                                                                                                                                                                                             |
| [Manager.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/lib\Manager.js)                   | The code defines and exports the `Manager` class, which is a subclass of the `Employee` class. It takes in the arguments `name`, `id`, `email`, and `officeNumber`. It has two additional methods: `getRole()`, which returns the role as `Manager`, and getOfficeNumber(), which returns the office number of the manager.                                                                                                                                                                                                                                                                                                                                                                                       |
| [demoTeam.html](https://github.com/pmAdriaan/team-profile-generator/blob/main/output\demoTeam.html)          | The code above is an HTML demo file that is generated by team profile generator. It uses Bootstrap CSS for styling and includes employee cards for each team member. The cards contain information such as name, role, ID, email, and additional details specific to each role (e.g., GitHub for engineers, school for interns). The output is a visually appealing and well-structured webpage displaying the team members' information.                                                                                                                                                                                                                                                                            |
| [page-template.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/src\page-template.js)       | This code is used to generate an HTML page that displays a team profile. It takes a team object as input and generates HTML code based on the roles of the team members (Manager, Engineer, or Intern). Each team member's information is displayed in a card format, including their name, role, ID, email, and additional details specific to their role (such as office number for Manager, GitHub username for Engineer, and school for Intern). The generated HTML code includes Bootstrap and Google Fonts for styling and a script tag for FontAwesome icons. The resulting HTML page is structured with a header, a team heading, and a section displaying the team members' information. |
| [style.css](https://github.com/pmAdriaan/team-profile-generator/blob/main/src\style.css)                     | The code defines the styling for a team profile generator. It sets the styling for various elements like headings, body, container, card, and list items. It also defines the layout and properties for different components used in the application, such as the team heading, employee cards, card header, card title, card body, and team area.                                                                                                                                                                                                                                                                                                                                |
| [Employee.test.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/__tests__\Employee.test.js) | The code in the `Employee.test.js` file contains tests for the `Employee` class. It verifies that the `Employee` class can be instantiated, and that it correctly sets and retrieves the employee's `name`, `id`, `email`, and `role`.                                                                                                                                                                                                                                                                                                                                             |
| [Engineer.test.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/__tests__\Engineer.test.js) | The code is a test file for the `Engineer` class in a team profile generator application. It tests that the `Engineer` class can set a GitHub account via the constructor, return the role as `Engineer` using the `getRole()` method, and get the GitHub username using the `getGithub()` method.                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Intern.test.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/__tests__\Intern.test.js)     | The code tests the functionality of the `Intern` class, which is a module in a team profile generator. It verifies that the `Intern` class can set a school via its constructor and get the school value using the `getSchool()` method. It also tests that the `getRole()` method returns `Intern` for an instance of the `Intern` class.                                                                                                                                                                                                                                                                                                                                                                    |
| [Manager.test.js](https://github.com/pmAdriaan/team-profile-generator/blob/main/__tests__\Manager.test.js)   | The code above consists of tests for the `Manager` class. The first test checks if the office number can be set through the class constructor.The second test verifies if the `getRole()` method returns `Manager`.The third test ensures that the office number can be retrieved using the `getOfficeNumber()` method.                                                                                                                                                                                                                                                                                                                                                                                   |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ inquirer`

`- ℹ️ jest`

`- ℹ️ fs and path`

### 🔧 Installation

1. Clone the team-profile-generator repository:
```sh
git clone https://github.com/pmAdriaan/team-profile-generator
```

2. Change to the project directory:
```sh
cd team-profile-generator
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running Team Profile Generator

```sh
node index.js fileName.html
```

### 🧪 Tests
```sh
npm test
```
---

### 🌐 Live Demo Team Profile Generator
► [Team Profile Generator](https://pmadriaan.github.io/team-profile-generator/)


### 📸 Team Profile Generator Screenshot

![Screenshot Team Profile Generator](./images/screenshot_team-profile-generator.png?raw=true "team-profile-generator")

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/pmAdriaan/team-profile-generator/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/pmAdriaan/team-profile-generator/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/pmAdriaan/team-profile-generator/issues)**: Submit bugs found or log feature requests for PMADRIAAN.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


Copyright © 2023 Mihai Pirvu (@pmAdriaan).

This project is licensed under the `ℹ️ MIT-License`. See the [MIT License](https://github.com/pmAdriaan/weather-wiz/blob/main/LICENSE) file for additional info.

---

## 👏 Acknowledgments

- Pratikto Ariestyadi - Instructor, Mahyar - TA

[**Return**](#Top)

---
