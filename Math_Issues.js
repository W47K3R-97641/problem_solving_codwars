/**
 *
 * @param {*} number
 * @returns
 */

Math.round = function(number) {
    if (number % 1 >= 0.5) {
        return parseInt(number) + 1;
    } else if (number % 1 < 0.5) {
        return parseInt(number);
    }
};

/**
 *
 * @param {*} number
 * @returns
 */

Math.ceil = function(number) {
    if (number % 1 > 0) {
        return parseInt(number) + 1;
    } else {
        return parseInt(number);
    }
};

/**
 *
 * @param {*} number
 * @returns
 */

Math.floor = function(number) {
    return parseInt(number);
};

// Link Challenge: https://www.codewars.com/kata/5267faf57526ea542e0007fb