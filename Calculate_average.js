/**
 *
 * @param {*} array
 * @returns
 */

function findAverage(array) {
    // your code here
    return array.length == 0 ?
        0 :
        array.reduce((cr, ac) => cr + ac) / array.length;
}

// Link challenge: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921