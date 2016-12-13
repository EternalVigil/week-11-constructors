// Command Line Interface - Flashcards
var inquirer = require ("inquirer");
var flashcard = require ("./Flashcard.js");
var clozecard = require ("./Clozecard.js");

function inputCommand(){
	"use strict";
inquirer.prompt([
	{
		name: "commandSelect",
		type: "list",
		message: "Select A Command:",
		choices: ["Enter New Card", "Review Flashcards", "Exit"]
	}
	
]).then(function(answers){
	if (answers.commandSelect === "Enter New Card"){
		console.log("Expand your library.");
		inputCommand();
	}
	else if (answers.commandSelect === "Review Flashcards"){
		console.log("Extend your knowledge.");
		inputCommand();
	}
	else if (answers.commandSelect === "Exit"){
		return console.log("Enough studying for now.");
	}
	else{
		return console.log("ERROR: You broke the CLI.");
	}
});
}
var deck = [];
inputCommand();