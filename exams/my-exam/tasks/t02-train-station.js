/**
 * @param capacityPerWagon {Number}
 * @param passengersForEachWagon {Array}
 */
function trainStation(capacityPerWagon, passengersForEachWagon) {
    const numberOfWagons = passengersForEachWagon.length;

    const wagons = [];

    let numberOfPeopleWhoCantRide = 0;
    for (let i = 0; i < passengersForEachWagon.length; i += 1) {
        let currentPeople = passengersForEachWagon[i];

        if (currentPeople > capacityPerWagon) {
            wagons.push(capacityPerWagon);
            const peopleLeft = currentPeople - capacityPerWagon;

            if (passengersForEachWagon[i + 1] === undefined) {
                numberOfPeopleWhoCantRide = peopleLeft;
            } else {
                passengersForEachWagon[i + 1] += peopleLeft;
            }
        } else {
            wagons.push(currentPeople);
        }
    }

    console.log(wagons);

    if (numberOfPeopleWhoCantRide === 0) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${numberOfPeopleWhoCantRide} passengers`);
    }
}

// trainStation(6, [5, 15, 2]);