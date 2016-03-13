var fs = require("fs");
var fileName = "../files/foo.txt";


/*
 *      WITHOUT EVENTS
 */
fs.exists(fileName, function (exists) {

    if (exists) {
        fs.stat(fileName, function (error, stats) {
            if (error) {
                throw error;
            }

            if (stats.isFile()) {
                fs.readFile(fileName, "utf-8", function (error, data) {
                    if (error) {
                        throw error;
                    }
                    console.log(data);
                });
            }
        })
    }
});

/*
 * WITH EVENTS
 */

var EventEmitter = require("events").EventEmitter;
var util = require("util");

function FileReader(fileName) {
    var _self = this;
    EventEmitter.call(_self);

    _self.on("stats", function () {
        fs.stat(fileName, function (error, stats) {
            if (!error && stats.isFile()) {
                _self.emit("read");
            }

        });
    });

    _self.on("read", function () {
        fs.readFile(fileName, "utf-8", function (error, data) {
            if (!error && data) {
                console.log(data);
            }
        });
    });


    fs.exists(fileName, function (exists) {
        if (exists) {
            _self.emit("stats");
        }
    });
};

util.inherits(FileReader, EventEmitter);

var reader = new FileReader(fileName);
