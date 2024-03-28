// function with 1 arg, conditionals, alert


function checkAge(number) {
	if (number >= 97) {
		alert("Generation: Greatest");
	}
	else if (79 <= number && number <= 96) {
		alert("Generation: Silent");
	}
	else if (60 <= number && number <= 78) {
		alert("Generation: Boomer");
	}
	else if (44 <= number && number <= 59) {
		alert("Generation: X");
	}
	else if (28 <= number && number <= 43) {
		alert("Generation: Millenial");
	}
	else if (12 <= number && number <= 27) {
		alert("Generation: Z");
	}
	else {
		alert("Generation: Alpha");
	}
}

let age = 21;
checkAge(age);