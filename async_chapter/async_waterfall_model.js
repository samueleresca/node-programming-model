/**
 * Created by rescas on 3/13/2016.
 */
var async = require("async");
var results = [];

async.waterfall([
    function (callback) {
        callback(null, Math.random(), Math.random());
    },
    function (a, b, callback) {
        callback(null, a * a + b * b);
    },
    function (cc, callback) {
        callback(null, Math.sqrt(cc));
    }
], function (error, c) {
    console.log(c);
});
