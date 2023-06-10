console.log("hello there");

let max_num = parseInt(prompt("welcome! Enter your max number:"));
while (!max_num) {
	max_num = parseInt(prompt("welcome! Enter your max number:"));
}
const num = Math.floor(Math.random() * max_num) + 1;
console.log(`the num is ${num}.`);

let guess_time = 1;
let guess = parseInt(prompt("enter your first guess:"));
while (guess !== num) {
	if (guess < num) {
		guess = parseInt(prompt("your guess is too small!"));
	}
	else {
		guess = parseInt(prompt("your guess is too big!"));
	}
	guess_time++;
}


// print guessing time
if (guess_time === 1) {
	console.log(`It took you ${guess_time} guess.`);
} else {
	console.log(`It took you ${guess_time} guesses.`);
}