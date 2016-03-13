/**
 * Created by rescas on 3/13/2016.
 */

var events = require("events");
var emitter = new events.EventEmitter();

var username = "sem";
var password = "password";


//watcher
emitter.on("userAdded", function (username, password) {
    console.log("Added user " + username);
});

//notifier
emitter.emit("userAdded", username, password);