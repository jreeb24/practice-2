/**
 * @author  Jacob Reeb
 * @version 0.0.1
 * @summary js code project 2
 * @todo insurance 
 */
 
"use strict";
const PROMPT = require('readline-sync');

let lastName, firstName, policyNumber;
let premmiumDate, accidentNumber;
let age, premmiumPrice;
 
/**
* @summary main dispatch method 
* @author Jacob Reeb
*/
function main() {
	setfirstName ();
	setlastName ();
	setpremmiumDate ();
	setaccidentNumber ();
	setage (); 
	setpremmiumPrice (); 
}
 
/**
* @todo Request First Name and last name and other neccessary info
* @date 12/6/19
*/
function firstName() {
	firstName = PROMPT.question(`\Enter Your first Name:`);
}

function lastName() {
	lastName = PROMPT.question(`\Enter Your Last Name:`);
}

function premmiumDate() {
	premmimumDate = PROMPT.question(`\Please Enter Premmium Due date, Month,day,year:`);
}

function accidentNumber() {
	accidentNumber = PROMPT.question(`\Please Enter Number of at fault Accidents:`); 
}

function age() {
	age = PROMPT.question(`\Please enter your Current age:`); 
}
 
/**
* @todo calcuate premmium Price
* @date 12/10/19
* @author Jacob Reeb
*/
functon premmiumPrice () {
	const basePrice = 100; 
	const accident = 50;
	if (age < 0) {
		if (age >= 15 && age < 30) {
		premmiumPrice= accident * accidentNumber + basePrice + 20 ; }
			if (age >= 30 && age < 45) {
			premmiumPrice= accident * accidentNumber + basePrice + 10 ; }
			if (age >= 46 &&  age < 59) { 
			premmiumPrice= accident * accidentNumber + baseprice + 0 ; } 
			if (age >= 60) {
			premmiumPrice= accident * accidentNumber + baseprice + 30 ; }
		}
	}
}