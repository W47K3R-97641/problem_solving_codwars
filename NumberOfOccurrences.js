Object.defineProperty(Array.prototype, "numberOfOccurrences", {
    value: function numberOfOccurrences(n) {
        let occurrences = 0;
        for (ele of this) ele == n && occurrences++;
        return occurrences;
    },
});

//  Link Challenge: https://www.codewars.com/kata/52829c5fe08baf7edc00122b