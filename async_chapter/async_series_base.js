/**
 * Created by rescas on 3/13/2016.
 */

var async = require("async");
var results = [];

async.series([
    function (callback) {
        setTimeout(function () {
            console.log("Task 1");
            callback(null, 1);
        }, 300);
    },
    function (callback) {
        setTimeout(function () {
            console.log("Task 2");
            callback(null, 2);
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            console.log("Task 3");
            callback(null, 3);
        }, 100);
    }
], function (error, results) {
    console.log(results);
});
