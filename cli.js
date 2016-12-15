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
		inquirer.prompt([
			{
				name: "cardType",
				type: "list",
				message: "What type is the new card?",
				choices: ["Standard Flash Card", "Cloze Flash Card"]
			}
			
		]).then(function(answers){
			if (answers.cardType === "Standard Flash Card"){
				console.log("Keeping it vanilla.");
				createFlashCard();
			}
			else if (answers.cardType === "Cloze Flash Card"){
				console.log("Living Dangerously.");
				createClozeCard();
			}
			else{
				return console.log("You broke something.");
			}
		});
		
		//inputCommand();
	}
	else if (answers.commandSelect === "Review Flashcards"){
		console.log("Extend your knowledge.");
		//inputCommand();
	}
	else if (answers.commandSelect === "Exit"){
		return console.log("Enough studying for now.");
	}
	else{
		return console.log("ERROR: You broke the CLI.");
	}
});
}

function createFlashCard(){
	"use strict";
	inquirer.prompt([
		{
			name: "frontInput",
			type: "input",
			message: "Enter the question: "
		},
		{
			name: "backInput",
			type: "input",
			message: "Enter the answer: "
		}
		
	]).then(function(answers){
		console.log("Time to create.");
		
		flashcard(answers.frontInput, answers.backInput);
		
		inputCommand();
	});
}

function createClozeCard(){
	"use strict";
	inquirer.prompt([
		{
			name: "frontCloze",
			type: "input",
			message: "Enter the entire phrase: "
		},
		{
			name: "backCloze",
			type: "input",
			message: "Enter the portion to be hidden: "
		}
		
	]).then(function(answers){
		if (answers.frontCloze.includes(answers.backCloze) === true){
			console.log("Let's delete some words.");
			clozecard(answers.frontCloze, answers.backCloze);
		}
		else{
			console.log("Check it again.");
		}
	});
}



var deck = [];
inputCommand();