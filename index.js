// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    //prepends a driver to the beginning of the drivers array
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    //removes the last driver from the drivers array
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    //removes the First driver from the drivers array
    drivers.shift();

}

function appendDriver(name){
    //appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
    return [ ...drivers, name];

}

function prependDriver(name){
    //prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
    return [name, ...drivers];
}

function removeLastDriver(){
    //removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
    return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver(){
    //removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
    return drivers.slice(1, drivers.length);
}

