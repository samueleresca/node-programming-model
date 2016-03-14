/**
 * Created by rescas on 3/14/2016.
 */

var commander = require("commander");

commander
    .option("-f, --foo <i>", "Integer value for foo", parseInt, 0)
    .option("-b, --bar <j>", "Integer value for bar", parseInt, 0)
    .option("-z, --baz ", "Boolean argument baz")
    .parse(process.argv);

console.log(commander.foo);
console.log(commander.bar);
console.log(commander.baz);
