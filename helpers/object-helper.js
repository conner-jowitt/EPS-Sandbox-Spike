const Boom = require('boom')

module.exports = {
    checkObjectEquality: function checkObjectEquality (x, y) {
        // if both are function
        if (x instanceof Function) {
            if (y instanceof Function) {
                return x.toString() === y.toString();
            }
            return false;
        }
        if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
        if (x === y || x.valueOf() === y.valueOf()) { return true; }

        // if one of them is date, they must had equal valueOf
        if (x instanceof Date) { return false; }
        if (y instanceof Date) { return false; }

        // if they are not function or strictly equal, they both need to be Objects
        if (!(x instanceof Object)) { return false; }
        if (!(y instanceof Object)) { return false; }

        var p = Object.keys(x);
        return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) ?
                p.every(function (i) { return checkObjectEquality(x[i], y[i]); }) : false;
    }
}