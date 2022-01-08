const chalk = require("chalk");
const validator = require('validator');

// console.log(chalk.blue('hello world'));
// console.log(chalk.red.underline.inverse('hello world'));
// console.log(chalk.green.inverse('hello world'));

const res = validator.isEmail("manishgoyal.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
