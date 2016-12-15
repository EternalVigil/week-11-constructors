// Cloze Flashcard Constructor
var fs = require ("fs");
var inquirer = require ("inquirer");

function Clozecard(answer, deletePortion){
	"use strict";
	var partial = answer - deletePortion;
	var clozeEntry = partial + " / " + answer + "\n";
	
	fs.writeFile("clozeCard.txt", clozeEntry, "utf8", function(error){
		if (error){
			return console.log("Something errored out in the append clozeCard.txt file.");
		}
		else{
			console.log("Data was pushed to storage.");
		}
	});
}

module.exports = Clozecard;