/**
 *
 * @param {*} arr
 * @param {*} n
 * @returns
 */

function first(arr, n) {
    // return arr;
    return n == undefined ? arr.slice(0, 1) : arr.slice(0, n);
}

// Link Challenge: https://www.codewars.com/kata/572b77262bedd351e9000076