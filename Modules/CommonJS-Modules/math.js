const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

// There are total 5 types to import & export the modules:

// module.exports = (a,b) => {...}
// module.exports.add = (a,b) => {...}
// exports.add = (a,b) => {...}
// module.exports = add
module.exports = {
    add,
    subtract
}