// Solution One
/**
 *
 * @param {*} n
 * @param {*} s
 * @returns
 */

function repeatStr(n, s) {
    return s.repeat(n);
}

// Solution Two
/**
 *
 * @param {*} n
 * @param {*} s
 * @returns
 */

function repeatStr(n, s) {
    var result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

// Link Challenge: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e