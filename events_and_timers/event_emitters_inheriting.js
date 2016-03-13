/**
 * Created by rescas on 3/13/2016.
 */

var events = require("events");
var EventEmitter = events.EventEmitter;

//get the EventEmitter constructor from the events module
var emitter = new EventEmitter();

emitter.on("foo", function () {
});
emitter.on("foo", function () {
});

console.log(events.EventEmitter.listenerCount(emitter, "foo"));