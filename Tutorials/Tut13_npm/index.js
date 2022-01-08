const chalk = require("chalk");
const validator = require('validator');

// console.log(chalk.blue('hello world'));
// console.log(chalk.red.underline.inverse('hello world'));
// console.log(chalk.green.inverse('hello world'));

const res = validator.isEmail("manish@goyal.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));



//////Tutorial 14th Global Npm Modules
// installin the nodemon