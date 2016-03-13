/**
 * Created by rescas on 3/13/2016.
 */

var EventEmitter = require("events").EventEmitter;

var util = require("util");

function UserEventEmitter() {
    EventEmitter.call(this);

    this.addUser = function (username, password) {
        //add user
        //then emit an event
        this.emit("userAdded", username, password);
    };
};
//Setup the inheritance
util.inherits(UserEventEmitter, EventEmitter);

var user = new UserEventEmitter();
var username = "sem";
var password = "password";

user.on("userAdded", function (username, password) {
    console.log("User added:" + username);
});

user.addUser(username, password);
console.log(user instanceof EventEmitter);
