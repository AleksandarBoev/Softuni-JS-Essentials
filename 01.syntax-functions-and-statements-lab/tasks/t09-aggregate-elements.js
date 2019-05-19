function aggregateElements(array) {
    const sumAllElements = (array) => {
        let result;
        if (typeof(array[0]) === 'number')
            result = 0;
        else if (typeof (array[0]) === 'string')
            result = '';

        array.forEach(e => result += e);
        return result;
    };

    const sumInverseValues = (array) => {
        let result = 0;
        array.forEach(e => result += 1 / e);
        return result;
    };

    console.log(sumAllElements(arguments[0]));
    console.log(sumInverseValues(arguments[0]));
    arguments[0][0] = arguments[0][0] + '';
    console.log(sumAllElements(arguments[0]));
}

// aggregateElements([1, 2, 3]);