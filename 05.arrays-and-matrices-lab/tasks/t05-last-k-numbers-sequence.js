function lastKNumbersSequence(numN, numK) {
    const arr = [1];
    for (let i = 1; i < numN; i += 1) {
        let sum = 0;

        for (let j = i - numK; j < i; j++)
            sum += arr[j] ? arr[j] : 0; //arr[j] might be NaN or undefined. In that case return 0

        arr[i] = sum;
    }

    console.log(arr.join(' '));
}

// lastKNumbersSequence(8, 2);