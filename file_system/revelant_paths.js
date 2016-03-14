/**
 * Created by rescas on 3/14/2016.
 */

console.log("This file is " + __filename);
console.log("It's located in " + __dirname);

console.log("Current working directory: " + process.cwd());
/*
 *Changing working directory
 */

console.log("Current working directory is: " + process.cwd());

try {
    process.chdir("/");
} catch (exception) {
    console.error("chdir error:" + exception.message);
}

console.log("Current working directory is: " + process.cwd());

