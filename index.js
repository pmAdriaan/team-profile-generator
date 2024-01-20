const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");

// Questions
const {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    chooseTeamRole,
    addNewTeamMember,
} = require('./questions');

// Constants
const OUTPUT_DIR = path.resolve(__dirname, "output");
const defaultFilename = "team.html";
const userFileName = process.argv[2];
const ANSWER_YES = 'YES';

// Store team members
const teamMembers = [];

// Validate filename
function validateFilename(file) {
    if (file && !file.endsWith('.html')) {
        console.error("Invalid filename. Please provide a filename with a .html extension.");
        process.exit(1);
    }
}

// Process command line arguments for the filename
const outputFilename = userFileName || defaultFilename;

// Log a message if the default filename is being used
if (!userFileName) {
    console.log(`\nUsing default filename: ${defaultFilename}\n`);
}

// Validate filename
validateFilename(outputFilename);
const outputPath = path.join(OUTPUT_DIR, outputFilename);


// Centralized error handling
function handleErrors(error, context) {
    console.error(`An error occurred in ${context}:`, error);
}

// Generic prompt function
async function prompt(questions, classType) {
    try {
        const roleInfo = {};

        for (const question of questions) {
            const answer = await inquirer.prompt({
                ...question,
                when: () => !roleInfo.id || question.name !== 'id',
                validate: input => validateInput(input, question.name),
            });

            roleInfo[question.name] = answer[question.name];
        }

        const roleInstance = new classType(...Object.values(roleInfo));
        teamMembers.push(roleInstance);

        return roleInstance;
    } catch (error) {
        handleErrors(error, classType.name);
        return null;
    }
}

// Validate input
function validateInput(input, name) {
    const trimmedInput = input.trim();

    switch (name) {
        case 'name':
            return trimmedInput ? true : "Please enter a valid name.";
        case 'email':
            return trimmedInput && trimmedInput.includes('@') ? true : "Please enter a valid email address.";
        case 'officeNumber':
            return trimmedInput && !isNaN(trimmedInput) ? true : "Please enter a valid office number.";
        case 'github':
            return trimmedInput ? true : "Please enter a valid GitHub username.";
        case 'school':
            return trimmedInput ? true : "Please enter a valid school name.";
        case 'id':
            return validateEmployeeId(trimmedInput);
        default:
            return trimmedInput ? true : `Please enter a valid ${name}.`;
    }
}

// Validate employee ID
function validateEmployeeId(input) {
    if (!input) {
        return "Please enter a valid employee ID.";
    }

    const isDuplicateId = teamMembers.some(member => member.id === input);
    return isDuplicateId ? "Error: Employee with the same ID already exists. Please enter a unique ID." : true;
}

// Ask whether to add more team members or not
async function addTeamMember() {
    try {
        const response = await inquirer.prompt(addNewTeamMember);

        if (response.addMember.toUpperCase() === ANSWER_YES) {
            await promptForTeamMember();
        } else {
            generateAndWriteHtml();
        }
    } catch (error) {
        handleErrors(error, 'addTeamMember');
    }
}

// Generate HTML and write to team.html or userFileName.html (argv[2])
function generateAndWriteHtml() {
    const renderedHtml = render(teamMembers);

    // Check if the 'output' directory exists, create it if not
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    // Write the generated HTML to 'outputPath'
    try {
        fs.writeFileSync(outputPath, renderedHtml);
        console.log(`\nTeam HTML file (${outputFilename}) generated successfully!`);
    } catch (err) {
        console.error("\nError writing to file:", err);
        process.exit(1);
    }
}

// Gather information about team members
async function gatherTeamInfo(roleQuestions, roleType) {
    try {
        const roleInfo = await prompt(roleQuestions, roleType);

        if (roleInfo) {
            await addTeamMember();
        }
    } catch (error) {
        handleErrors(error, 'gatherTeamInfo');
    }
}

// Prompt for information based on the team member's role
async function promptForTeamMember() {
    try {
        const roleResponse = await inquirer.prompt(chooseTeamRole);

        if (roleResponse.role === 'Engineer') {
            await gatherTeamInfo(engineerQuestions, Engineer);
        } else if (roleResponse.role === 'Intern') {
            await gatherTeamInfo(internQuestions, Intern);
        }
    } catch (error) {
        handleErrors(error, 'promptForTeamMember');
    }
}

// Call the function to start gathering information
gatherTeamInfo(managerQuestions, Manager);
