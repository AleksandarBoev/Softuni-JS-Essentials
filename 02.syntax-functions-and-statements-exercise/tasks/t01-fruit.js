function fruit(fruitName, weightInGrams, pricePerKilo) {
    const weightInKilograms = weightInGrams / 1000;
    const totalPrice = pricePerKilo * weightInKilograms;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitName}.`)
}

// fruit('apple', 1563, 2.35);