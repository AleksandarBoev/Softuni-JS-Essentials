function caffeineStudy(days) {
    const coffeeMlPerCup = 150;
    const cocaColaMlPerBottle = 250;
    const teaMlPerCup = 350;
    const energyDrinkMlPerCan = 500;

    const coffeeCupsPerDay = 3;
    const cocaColaBottlesPerDay = 2;
    const teaCupsPerDay = 3;
    const fifthDayEnergyDrinksCans = 3;
    const ninthDayCocaColaBottles = 4;
    const ninthDayEnergyDrinksCans = 2;

    const coffeeCaffeinePer100Ml = 40;
    const cocaColaCaffeinePer10Ml = 8;
    const teaCaffeinePer100Ml = 20;
    const energyDrinkCaffeinePer100Ml = 30;

    const calculateCaffeineMg = (numberOfDrinks, mlPerDrink, mgPer100Ml) => {
        const totalMl = numberOfDrinks * mlPerDrink;
        return totalMl * (mgPer100Ml / 100);
    };

    let totalCaffeineMg = 0;
    for (let i = 1; i <= days; i += 1) {
        if (i % 5 === 0) {
            totalCaffeineMg += calculateCaffeineMg(fifthDayEnergyDrinksCans, energyDrinkMlPerCan, energyDrinkCaffeinePer100Ml);
            // continue;
        }

        if (i % 9 === 0) {
            totalCaffeineMg += calculateCaffeineMg(ninthDayCocaColaBottles, cocaColaMlPerBottle, cocaColaCaffeinePer10Ml);
            totalCaffeineMg += calculateCaffeineMg(ninthDayEnergyDrinksCans, energyDrinkMlPerCan, energyDrinkCaffeinePer100Ml);
            // continue;
        }

        totalCaffeineMg += calculateCaffeineMg(coffeeCupsPerDay, coffeeMlPerCup, coffeeCaffeinePer100Ml);
        totalCaffeineMg += calculateCaffeineMg(cocaColaBottlesPerDay, cocaColaMlPerBottle, cocaColaCaffeinePer10Ml);
        totalCaffeineMg += calculateCaffeineMg(teaCupsPerDay, teaMlPerCup, teaCaffeinePer100Ml);
    }

    console.log(`${totalCaffeineMg} milligrams of caffeine were consumed`);
}

// caffeineStudy(8);
