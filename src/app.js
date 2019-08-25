'use strict';

const name = `Ryan`;

const add = (a,b) =>  a + b;

const sum = (...numbers) => {
	return numbers.reduce((prev,cur) => {
		return prev + curr;
	});
};

console.log(sum(23,4,5));
