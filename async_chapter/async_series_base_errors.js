/**
 * Created by rescas on 3/13/2016.
 */

var async = require("async");
var results = [];

async.series([
    function (callback) {
        setTimeout(function () {
            console.log("Task 1");
            callback(new Error("Problem in Task 1"), 1);
        }, 300);
    },
    function (callback) {
        setTimeout(function () {
            console.log("Task 2");
            callback(new Error("Problem in Task 2"), 2);
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            console.log("Task 3");
            callback(new Error("Problem in Task 3"), 3);
        }, 100);
    }
], function (error, results) {
    if (error) {
        console.log(error.toString());
    } else {
        console.log(results);
    }
});




