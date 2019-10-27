// Write your solution here

// drivers
// ✓ is assigned an initial value of ["Milo", "Otis", "Garfield"]
const drivers = ['Milo', 'Otis', 'Garfield']


// destructivelyAppendDriver(name)
// ✓ appends a driver to the end of the drivers array
function destructivelyAppendDriver(name){
    drivers.push(name);
}


// destructivelyPrependDriver(name)
// ✓ prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

// destructivelyRemoveLastDriver()
// ✓ removes the last driver from the drivers array
function destructivelyRemoveLastDriver(){
    drivers.pop();
}


// destructivelyRemoveFirstDriver()
// ✓ removes the First driver from the drivers array
function destructivelyRemoveFirstDriver(){
    drivers.shift();
}


// appendDriver(name)
// ✓ appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name){
    return [...drivers.slice(0), name];
}

// prependDriver(name)
// ✓ prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name){
    return [name,...drivers.slice(0)];
}


// removeLastDriver()
// ✓ removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver(){
    return drivers.slice(0,2);
}


// removeFirstDriver()
// ✓ removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver(){
    return drivers.slice(1,3);
}
