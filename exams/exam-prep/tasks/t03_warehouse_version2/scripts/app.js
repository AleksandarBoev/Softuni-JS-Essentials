function coffeeStorage() {
    const inputArray = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    const [reportParagraph, inspectionParagraph] = document.body.getElementsByTagName('p');
    const nameBrand = {};

    for (const currentInput of inputArray) {
        const [command, brandName, coffeeName, expireDate, quantity] = currentInput.split(', ');

        if (command === 'IN') {
            if (nameBrand[brandName] === undefined) {
                nameBrand[brandName] = {};
            }

            if (nameBrand[brandName][coffeeName] === undefined) {
                nameBrand[brandName][coffeeName] = {};
                nameBrand[brandName][coffeeName]['expireDate'] = expireDate;
                nameBrand[brandName][coffeeName]['quantity'] = Number.parseInt(quantity);
                continue;
            }

            const existingCoffee = nameBrand[brandName][coffeeName];

            const comparisonResult = existingCoffee['expireDate'].localeCompare(expireDate);

            if (comparisonResult > 0) {
                continue;
            }

            if (comparisonResult === 0) {
                existingCoffee['quantity'] += quantity;
                continue;
            }

            if (comparisonResult < 0) {
                existingCoffee['expireDate'] = expireDate;
                existingCoffee['quantity'] = quantity;
            }
        } else if (command === 'OUT') {
            //"OUT, Dallmayr, Espresso, 2022-07-19, 5"
            if (nameBrand[brandName] === undefined) {
                continue;
            }

            if (nameBrand[brandName][coffeeName] === undefined) {
                continue;
            }

            const existingCoffee = nameBrand[brandName][coffeeName];

            if (existingCoffee['expireDate'].localeCompare(expireDate) > 0
                && existingCoffee['quantity'] >= Number.parseInt(quantity)) {
                existingCoffee['quantity'] -= Number.parseInt(quantity);
            }
        } else if (command === 'REPORT') {
            for (const currentBrandName in nameBrand) {
                let currentBrandString = currentBrandName + ': ';
                for (const currentCoffeeName in nameBrand[currentBrandName]) {
                    const currentCoffee = nameBrand[currentBrandName][currentCoffeeName];
                    currentBrandString += `${currentCoffeeName} - ${currentCoffee['expireDate']} - ${currentCoffee['quantity']}. `
                }

                currentBrandString = currentBrandString.trim();
                reportParagraph.innerHTML += currentBrandString + '<br>';
            }
        } else if (command === 'INSPECTION') {
            /*
            Brands should be sorted alphabetically
            and for each brand the coffee should be sorted by quantity in descending order.
             */
            let allBrandNames = Object.keys(nameBrand);
            allBrandNames = allBrandNames.sort((brand1Name, brand2Name) => brand1Name.localeCompare(brand2Name));

            for (const currentBrandName of allBrandNames) {
                let currentBrandString = currentBrandName + ': ';

                let arrayOfCoffees = Object.entries(nameBrand[currentBrandName]);
                arrayOfCoffees = arrayOfCoffees
                    .sort((coffee1Arr, coffee2Arr) => {
                        const comparisonResult = coffee2Arr[1]['quantity'] - coffee1Arr[1]['quantity'];
                        return comparisonResult;
                    });

                for (const currentCoffeeArray of arrayOfCoffees) {
                    const coffeeName = currentCoffeeArray[0];
                    const coffeeExpireDate = currentCoffeeArray[1]['expireDate'];
                    const coffeeQuantity = currentCoffeeArray[1]['quantity'];

                    currentBrandString += `${coffeeName} - ${coffeeExpireDate} - ${coffeeQuantity}. `
                }

                currentBrandString = currentBrandString.trim();
                inspectionParagraph.innerHTML += currentBrandString + '<br>';
            }
        }
    }
}
