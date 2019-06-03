function coffeeStorage() {
    const brand = (brandName) => {
        const localBrandName = brandName;
        const coffeeArray = [];

        const coffeeCompareByQuantity = (coffee1, coffee2) => coffee2['quantity'] - coffee1['quantity'];

        const getExpireDateAsIntegerArray = (expireDate, delimiter) => {
            expireDate = expireDate.split(delimiter);
            return [Number.parseInt(expireDate[0]), Number.parseInt(expireDate[1]), Number.parseInt(expireDate[2])];
        };

        /**
         * @returns {number} "> 0" if coffee1's expire date is later than coffee2's.
         * "< 0" if coffee2's expire date is later and 0 if expire dates are equal.
         */
        const coffeeCompareByExpireDate = (coffee1, coffee2) => {
            const coffee1ExpireDateValues = getExpireDateAsIntegerArray(coffee1['expireDate'], '-');
            const coffee2ExpireDateValues = getExpireDateAsIntegerArray(coffee2['expireDate'], '-');

            let comparisonResult = 0;
            comparisonResult = coffee1ExpireDateValues[0] - coffee2ExpireDateValues[0];

            if (comparisonResult === 0)
                comparisonResult = coffee1ExpireDateValues[1] - coffee2ExpireDateValues[1];

            if (comparisonResult === 0)
                comparisonResult = coffee1ExpireDateValues[2] - coffee2ExpireDateValues[2];

            return comparisonResult;
        };

        const getBrandString = coffeeArray => {
            let result = localBrandName + ': ';
            for (const currentCoffee of coffeeArray)
                result += `${currentCoffee['name']} - ${currentCoffee['expireDate']} - ${currentCoffee['quantity']}. `;

            return result.trim();
        };

        const getCoffeeByName = (coffeeName) => {
            for (let currentCoffee of coffeeArray) {
                if (currentCoffee['name'] === coffeeName) {
                    return currentCoffee;
                }
            }

            return null;
        };


        return {
            addCoffee: newCoffee => { //IN command
                //name: Crema e Gusto, expireDate: 2023-05-01, quantity: 5'
                let foundCoffee = getCoffeeByName(newCoffee['name']);

                if (foundCoffee === null) {
                    coffeeArray.push(newCoffee);
                    return;
                }

                const coffeeComparisonByDateResult = coffeeCompareByExpireDate(newCoffee, foundCoffee);

                if (coffeeComparisonByDateResult > 0) { //if newCoffee's expire date is later
                    foundCoffee = newCoffee; //TODO coffee is NOT replaced
                } else if (coffeeComparisonByDateResult === 0) {
                    foundCoffee['quantity'] += newCoffee['quantity'];
                } else {
                    //do nothing
                }
            },
            removeCoffee: coffee => {
                let foundCoffee = getCoffeeByName(coffee['name']);

                if (foundCoffee === null)
                    return;

                if (coffeeCompareByExpireDate(foundCoffee, coffee) > 0 && foundCoffee['quantity'] >= coffee['quantity']) {
                    foundCoffee['quantity'] -= coffee['quantity'];
                }
            },
            report: () => getBrandString(coffeeArray),
            inspection: () => {
                const sortedCoffeeArray = coffeeArray.sort(coffeeCompareByQuantity);
                return getBrandString(sortedCoffeeArray);
            },
        }
    };

    const allBrands = {};

    const textAreaElement = document.body.querySelectorAll('section textarea')[0];
    const reportParagraph = document.body.querySelectorAll('section div p')[0];
    const inspectionParagraph = document.body.querySelectorAll('section div p')[1];
    const inputArray = JSON.parse(textAreaElement.value);
    // const inputArray = JSON.parse('["IN, Batdorf & Bronson, Espresso, 2025-05-25, 20","IN, Folgers, Black Silk, 2023-03-01, 14","IN, Lavazza, Crema e Gusto, 2023-05-01, 5","IN, Lavazza, Crema e Gusto, 2023-05-02, 5","IN, Folgers, Black Silk, 2022-01-01, 10","IN, Lavazza, Intenso, 2022-07-19, 20","OUT, Dallmayr, Espresso, 2022-07-19, 5","OUT, Dallmayr, Crema, 2022-07-19, 5","OUT, Lavazza, Crema e Gusto, 2020-01-28, 2","REPORT","INSPECTION"]');

    for (const inputArrayElement of inputArray) {
        const tokens = inputArrayElement.split(', ');

        const command = tokens[0];
        const brandName = tokens[1];


        const coffee = {
            'name': tokens[2],
            'expireDate': tokens[3],
            'quantity': Number.parseInt(tokens[4]),
        };

        switch (command) {
            case 'IN':
                if (allBrands[brandName] === undefined)
                    allBrands[brandName] = brand(brandName);

                allBrands[brandName].addCoffee(coffee);
                break;

            case 'OUT':
                if (allBrands[brandName] === undefined)
                    break;
                allBrands[brandName].removeCoffee(coffee);
                break;

            case 'INSPECTION':
                let inspectionResult = '';
                let orderedBrandNames = Object.keys(allBrands).sort((name1, name2) => name1.localeCompare(name2));
                for (const currentBrandName of orderedBrandNames) {
                    inspectionParagraph.innerHTML += allBrands[currentBrandName].inspection();
                    inspectionParagraph.innerHTML += '<br>';
                }
                break;

            case 'REPORT':
                let reportResult = '';
                for (let currentBrandName in allBrands) {
                    reportParagraph.innerHTML += allBrands[currentBrandName].report();
                    reportParagraph.innerHTML += '<br>';
                }
                break;
        }
    }
}

//testing
/*
["IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
"IN, Folgers, Black Silk, 2023-03-01, 14",
"IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
"IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
"IN, Folgers, Black Silk, 2022-01-01, 10",
"IN, Lavazza, Intenso, 2022-07-19, 20",
"OUT, Dallmayr, Espresso, 2022-07-19, 5",
"OUT, Dallmayr, Crema, 2022-07-19, 5",
"OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
"REPORT",
"INSPECTION"]
 */

/*
'Batdorf & Bronson: Espresso - 2025-05-25 - 20.Folgers: Black Silk - 2023-03-01 - 14.Lavazza: Crema e Gusto - 2023-05-01 - 3. Intenso - 2022-07-19 - 20.'
'Batdorf & Bronson: Espresso - 2025-05-25 - 20.Folgers: Black Silk - 2023-03-01 - 14.Lavazza: Crema e Gusto - 2023-05-02 - 3. Intenso - 2022-07-19 - 20.' //this is right
 */
/*
expected (my output) to equal (right output)
 */