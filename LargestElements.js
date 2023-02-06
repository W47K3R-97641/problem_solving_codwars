function largest(n, array) {
    // Find the n highest elements in a list
    return array.sort((a, b) => a - b).slice(array.length - n);
}

// Link Challenge: https://www.codewars.com/kata/53d32bea2f2a21f666000256