function spy() {
    return "I'm a callback function as an argument"
}
function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    function fn() {
        console.log("I am a named function")
    }
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function")
    }
}