/**
 *
 * @param {*} arr
 * @param {*} toReturn
 * @returns
 */

function min(arr, toReturn) {
    // TODO
    return toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

// Link Challenge: https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript