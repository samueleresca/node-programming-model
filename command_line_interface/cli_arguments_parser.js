/**
 * Created by rescas on 3/14/2016.
 */
process.argv.forEach(function (arg, index) {
    console.log("argv[" + index + "]=" + arg);
});

function parseArgs() {
    var argv = process.argv;

    var argv = {
        baz: false
    };

    for (var i = 0, len = argv.length; i < len; i++) {
        var arg = argv[i];
        var match;

        if (arg === "-foo") {
            args.foo = parseInt(argv[++i]);
        } else if (arg === "-baz") {
            args.baz = true;
        } else if (match = arg.match(/--bar=(\d+)/)) {
            args.bar = parseInt(match[1]);
        }
    }

    return args;
}

var args = parseArgs();
console.log(args);