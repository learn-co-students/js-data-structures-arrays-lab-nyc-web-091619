// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver() {
    name = 'Ralph';
    drivers.push(name);
    drivers
}

function destructivelyPrependDriver() {
    name = 'Bob';
    drivers.unshift(name);
    drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
    drivers
}

function appendDriver(name) {
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers];
}

function removeFirstDriver() {
    return drivers.slice(1);
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length-1);
}