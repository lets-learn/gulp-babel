'use strict';

let name = `Ryan`;

let add = (a,b) =>  a + b;

let sum = (...numbers) => {
	return numbers.reduce((prev,cur) => {
		return prev + curr;
	});
};

console.log(sum(23,4,5));
