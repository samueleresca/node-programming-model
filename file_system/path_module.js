/**
 * Created by rescas on 3/14/2016.
 */
var path = require("path");
var directories = ["foo", "bar", "baz"];
var fakeFileName = "/foo/bar/baz.txt";
var fakeDirName = "foo/bar/.././bar/../../baz";

//join an array using path separator
var directory = directories.join(path.sep);
console.log(directory);

//split some path from PATH environment
process.env.PATH.split(path.delimiter).forEach(function (dir) {
    console.log(dir);
});

//GET THE EXTENSION
var extension = path.extname(fakeFileName);
console.log(extension);
//ASSERT the extension is .txt

//NORMALIZE THE PATH
var normalized = path.normalize(fakeDirName);
console.log(normalized);