// Flashcard Constructor
var fs = require("fs");
var inquirer = require ("inquirer");

function Flashcard (question, answer){
	"use strict";
	console.log("Making Flash Cards");

	var cardEntry = question + " / " + answer + "\n";
	
	fs.appendFile("flashcards.txt", cardEntry, "utf8", function (error){
		if (error){
			return console.log("Something happened with the append FileSystem.");
		}
		else{
			console.log("Data was pushed to storage.");
			//deck.push(cardEntry);
		}
	});
}
module.exports = Flashcard;