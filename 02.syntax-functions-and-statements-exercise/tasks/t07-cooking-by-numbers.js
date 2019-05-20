function cookingByNumbers(arrayInput) {
    const operationsObject = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num + 1,
        'bake': num => num * 3,
        'fillet': num => num - (num * 0.2)
    };

    let number = arrayInput[0];
    for (let i = 1; i < arrayInput.length; i++) {
        number = operationsObject[arrayInput[i]](number);
        console.log(number);
    }

}

// cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

