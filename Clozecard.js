// Cloze Flashcard Constructor
var fs = require ("fs");
var inquirer = require ("inquirer");

function Clozecard(answer, deletePortion){
	"use strict";
	this.answer = answer;
	this.partial = answer - deletePortion;
	var clozeEntry = [this.partial, answer];
	
	fs.writeFile("clozeCard.txt", clozeEntry, "utf8", function(error){
		if (error){
			return console.log("Something errored out in the append clozeCard.txt file.");
		}
		else{
			clozeDeck.push(clozeEntry);
		}
	});
}

module.exports = Clozecard;