/**
 * Created by rescas on 3/14/2016.
 */

var commander = require("commander");
//Obsolete: ..
commander.prompt("What is your name?", function (name) {
    console.log("You said your name is " + name);
    process.stdin.pause();
});
