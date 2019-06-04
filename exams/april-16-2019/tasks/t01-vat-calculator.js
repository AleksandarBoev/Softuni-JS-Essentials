function vatCalculator(priceWithVat, vatRate) {
    const backwardsPercentage = (vatRate / 100) + 1;
    console.log((priceWithVat / backwardsPercentage).toFixed(2));
}

// vatCalculator(220, 10);