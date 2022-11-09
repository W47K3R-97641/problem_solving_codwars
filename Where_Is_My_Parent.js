/**
 *
 * @param {*} dancingBrigade
 * @returns
 */

function findChildren(dancingBrigade) {
    let curr;
    dancingBrigade = dancingBrigade.toLowerCase().split("").sort();
    for (let i = 0; i < dancingBrigade.length; i++) {
        if (i == 0 || curr != dancingBrigade[i]) {
            curr = dancingBrigade[i];
            dancingBrigade[i] = dancingBrigade[i].toUpperCase();
        }
    }
    return dancingBrigade.join("");
}

console.log(findChildren("uwwWUueEe")); // Input => "EeeUuuWww"

// Link Challenge: https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript