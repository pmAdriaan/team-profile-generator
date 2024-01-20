const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Store team members
const teamMembers = [];

// Gather information about team members
function gatherTeamInfo() {
    // TODO: Implement the Inquirer prompts to gather information
    return console.log('Gather team info...');
}

// Call the function to start gathering information
gatherTeamInfo();
