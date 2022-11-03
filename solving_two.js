function numberToPower(number, power) {
    console.info(Math.log2(1024));
    // Code here
    var res = 0;
    if (power == 0) {
        return 1;
    } else if (power == 1) {
        return number;
    } else {
        for (let i = 0; i < power - 1; i++) {
            if (i == 0) {
                res = number * number;
            } else {
                res = res * number;
            }
        }
    }

    return res;
}

console.log(numberToPower(11, 1));