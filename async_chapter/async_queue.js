/**
 * Created by rescas on 3/13/2016.
 */
var async = require("async");
var results = [];

var queue = async.queue(function (task, runner) {
    //process the task argument
    consol.log(task);
    callback(null);
}, 4);
