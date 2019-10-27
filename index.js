// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
// 1) appends a driver to the end of the drivers array
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
// 2) prepends a driver to the beginning of the drivers array
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}
// 3) removes the last driver from the drivers array


function destructivelyRemoveFirstDriver() {
// 4) removes the First driver from the drivers array
    drivers.shift();
}

function appendDriver(name) {
// 5) appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
    return [...drivers.slice(0), name];
}

function prependDriver(name) {
// 6) prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
    return [name,...drivers.slice(0)];
}

function removeLastDriver(name) {
// 7) removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
    return drivers.slice(0,2);
}

function removeFirstDriver() {
//  8) removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
    return drivers.slice(1,3);
}
