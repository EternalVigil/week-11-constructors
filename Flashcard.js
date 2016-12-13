// Flashcard Constructor
var fs = require("fs");
var inquirer = require ("inquirer");

function Flashcard (question, answer){
	"use strict";
	this.question = question;
	this.answer = answer;
	var cardEntry = [question, answer];
	
	fs.writeFile("flashcards.txt", cardEntry, "utf8", function(error){
		if (error){
			return console.log("Something happened with the append FileSystem.");
		}
		else{
			flashDeck.push(cardEntry);
		}
	});
}

module.exports = Flashcard;