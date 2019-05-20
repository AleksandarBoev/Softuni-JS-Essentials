
function coffeeMachine(arrayOfInputs) {
    const coffeeCaffeinePrice = 0.8;
    const coffeeDecafPrice = 0.9;
    const teaPrice = 0.8;
    const milkPrice = drinkPrice => Number.parseFloat((drinkPrice / 10).toFixed(1));
    const sugarPrice = sugarsCount => sugarsCount > 0 ? 0.10 : 0.0;

    let totalIncome = 0;

    for (const currentArray of arrayOfInputs) {
        let tokens = currentArray.split(', ');
        const moneyInserted= Number.parseFloat(tokens.shift());
        const numberOfSugars = Number.parseInt(tokens.pop());
        const drinkType = tokens.shift();

        let totalPrice = 0;
        if (tokens.includes('decaf')) {
            totalPrice += coffeeDecafPrice;
        } else if (tokens.includes('caffeine')) {
            totalPrice += coffeeCaffeinePrice;
        } else if (drinkType === 'tea') {
            totalPrice += teaPrice;
        }

        if (tokens.includes('milk')) {
            totalPrice += milkPrice(totalPrice);
        }

        totalPrice += sugarPrice(numberOfSugars);

        const difference = Math.abs(totalPrice - moneyInserted).toFixed(2);
        if (totalPrice <= moneyInserted) {
            console.log(`You ordered ${drinkType}. Price: $${totalPrice.toFixed(2)} Change: $${difference}`);
            totalIncome += totalPrice;
        } else {
            console.log(`Not enough money for ${drinkType}. Need $${difference} more.`);
        }
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

// coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);