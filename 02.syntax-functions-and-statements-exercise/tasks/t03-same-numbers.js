function sameNumbers(number) {
    const numberDigits = ('' + number).split('');

    let allDigitsAreTheSame = true;
    let totalSum = 0;
    for (let i = 0; i < numberDigits.length; i++) {
        totalSum += +numberDigits[i];
        if (numberDigits[0] !== numberDigits[i])
            allDigitsAreTheSame = false;
    }

    console.log(allDigitsAreTheSame);
    console.log(totalSum);
}

// sameNumbers(1234);