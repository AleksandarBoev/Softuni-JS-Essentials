function spaceshipCrafting() {
    const titaniumCoresInput = document.getElementById('titaniumCoreFound').value;
    const aluminiumCoresInput = document.getElementById('aluminiumCoreFound').value;
    const magnesiumCoresInput = document.getElementById('magnesiumCoreFound').value;
    const carbonCoresInput = document.getElementById('carbonCoreFound').value;
    const lossesPercentInput = document.getElementById('lossesPercent').value;

    const getRoundedValue = (number) => Number.parseInt(number.toFixed(0));

    /*
    input 1:
    467.5, 1265, 1815, 1650, 40

    input 2:
    600, 1600, 2175, 2100, 0
     */
    let numberOfTitaniumCores = Number.parseFloat(titaniumCoresInput);
    let numberOfAluminumCores = Number.parseFloat(aluminiumCoresInput);
    let numberOfMagnesiumCores = Number.parseFloat(magnesiumCoresInput);
    let numberOfCarbonCores = Number.parseFloat(carbonCoresInput);
    let lossesPercent = Number.parseFloat(lossesPercentInput);
    lossesPercent /= 100;
    const lossesPercentPerCoreType = lossesPercent / 4;

    numberOfTitaniumCores -= numberOfTitaniumCores * lossesPercentPerCoreType;
    numberOfAluminumCores -= numberOfAluminumCores * lossesPercentPerCoreType;
    numberOfMagnesiumCores -= numberOfMagnesiumCores * lossesPercentPerCoreType;
    numberOfCarbonCores -= numberOfCarbonCores * lossesPercentPerCoreType;

    numberOfTitaniumCores = getRoundedValue(numberOfTitaniumCores);
    numberOfAluminumCores = getRoundedValue(numberOfAluminumCores);
    numberOfMagnesiumCores = getRoundedValue(numberOfMagnesiumCores);
    numberOfCarbonCores = getRoundedValue(numberOfCarbonCores);

    const titaniumCoresForOneBar = 25;
    const aluminumCoresForOneBar = 50;
    const magnesiumCoresForOneBar = 75;
    const carbonCoresForOneBar = 100;

    let titaniumBarsAvailable = Math.round(numberOfTitaniumCores / titaniumCoresForOneBar); //not ".floor"!
    let aluminumBarsAvailable = Math.round(numberOfAluminumCores / aluminumCoresForOneBar);
    let magnesiumBarsAvailable = Math.round(numberOfMagnesiumCores / magnesiumCoresForOneBar);
    let carbonBarsAvailable = Math.round(numberOfCarbonCores / carbonCoresForOneBar);

    let availableBars = [titaniumBarsAvailable, aluminumBarsAvailable, magnesiumBarsAvailable, carbonBarsAvailable];

    const spaceShip = (name, neededBarsArray) => {
        let spaceShipsBuilt = 0;
        return {
            buildSpaceShip: (availableBarsArray) => {
                for (let i = 0; i < availableBarsArray.length; i++) {
                    if (availableBarsArray[i] < neededBarsArray[i]) { //if even one material is not enough, then stop
                        return false;
                    }
                }

                for (let i = 0; i < availableBarsArray.length; i++) {
                    availableBarsArray[i] -= neededBarsArray[i];
                }

                spaceShipsBuilt++;
                return true;
            },
            getString: () => {
                return `${spaceShipsBuilt} ${name}`
            },
            getNumberOfShipsBuilt: () => spaceShipsBuilt,
        }
    };

    // 7 titanium bars, 9 aluminum bars, 7 magnesium bars, 7 carbon bars
    const theUndefinedShip = spaceShip('THE-UNDEFINED-SHIP', [7, 9, 7, 7]);

    // 5 titanium bars, 7 aluminum bars, 7 magnesium bars, 5 carbon bars
    const nullMasterShip = spaceShip('NULL-MASTER', [5, 7, 7, 5]);

    // 3 titanium bars, 5 aluminum bars, 5 magnesium bars, 2 carbon bars
    const jsonCrew = spaceShip('JSON-CREW', [3, 5, 5, 2]);

    // 2 titanium bars, 2 aluminum bars, 3 magnesium bars, 1 carbon bar
    const falseFleet = spaceShip('FALSE-FLEET', [2, 2, 3, 1]);

    let arrayOfShips = [theUndefinedShip, nullMasterShip, jsonCrew, falseFleet];

    while (true) {
        const undefinedShipBuilt = theUndefinedShip.buildSpaceShip(availableBars);
        const nullMasterShipBuilt = nullMasterShip.buildSpaceShip(availableBars);
        const jsonCrewShipBuilt = jsonCrew.buildSpaceShip(availableBars);
        const falseFleetShipBuilt = falseFleet.buildSpaceShip(availableBars);

        const atLeastOneSpaceShipIsBuilt = undefinedShipBuilt || nullMasterShipBuilt || jsonCrewShipBuilt || falseFleetShipBuilt;

        if (!atLeastOneSpaceShipIsBuilt) {
            break;
        }
    }

    arrayOfShips = arrayOfShips.filter(s => s.getNumberOfShipsBuilt() > 0);
    const shipsString = arrayOfShips.map(s => s.getString()).join(', ');
    const barsLeftString = `${availableBars[0]} titanium bars, ${availableBars[1]} aluminum bars, ${availableBars[2]} magnesium bars, ${availableBars[3]} carbon bars`;

    // console.log(shipsString);
    // console.log(barsLeftString);

    /*
    output 1:
    1 THE-UNDEFINED-SHIP, 1 NULL-MASTER, 1 JSON-CREW, 1 FALSE-FLEET
    0 titanium bars, 0 aluminum bars, 0 magnesium bars, 0 carbon bars

    output 2:
    1 THE-UNDEFINED-SHIP, 2 NULL-MASTER, 1 JSON-CREW, 1 FALSE-FLEET
    2 titanium bars, 2 aluminum bars, 0 magnesium bars, 1 carbon bars
     */

    const availableBarsParagraph = document.querySelector('div#availableBars p');
    const buildSpaceShipsParagraph = document.querySelector('div#builtSpaceships p');

    availableBarsParagraph.textContent = barsLeftString;
    buildSpaceShipsParagraph.textContent = shipsString;
}

// spaceshipCrafting();

