/**
 * @param arrayOfStrings {Array}
 */
function coffeeMachine(arrayOfStrings) {
    const coffeeCaffeinePrice = 0.8;
    const coffeeDecafPrice = 0.9;
    const teaPrice = 0.8;

    let totalIncome = 0;
    for (const currentOrder of arrayOfStrings) {
        const orderTokens = currentOrder.split(', ').filter(e => e !== '');

        let chosenDrink = '';
        const insertedMoney = Number.parseFloat(orderTokens[0]);
        let totalCost = 0;
        if (orderTokens.includes('tea')) {
            chosenDrink = 'tea';
            totalCost += teaPrice;
        } else if (orderTokens.includes('decaf')) {
            totalCost += coffeeDecafPrice;
        } else {
            totalCost += coffeeCaffeinePrice;
        }

        chosenDrink = chosenDrink || 'coffee';

        if (orderTokens.includes('milk')) {
            totalCost += Number.parseFloat((totalCost * 0.1).toFixed(1));
        }

        const numberOfSugars = Number.parseInt(orderTokens[orderTokens.length - 1]);
        if (numberOfSugars > 0) {
            totalCost += 0.1;
        }

        if (totalCost > insertedMoney) {
            console.log(`Not enough money for ${chosenDrink}. Need ${(totalCost - insertedMoney).toFixed(2)}$ more.`)
        } else {
            totalIncome += totalCost;
            console.log(`You ordered ${chosenDrink}. ` +
                `Price: ${totalCost.toFixed(2)}$ ` +
                `Change: ${(insertedMoney - totalCost).toFixed(2)}$`)
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`)
}
//
// coffeeMachine([
//     '1.00, coffee, caffeine, milk, 4',
//     '0.40, tea, milk, 2',
//     '1.00, coffee, decaf, 0'
// ]);