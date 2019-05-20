function roadRadar(arrayInput) {
    const areasSpeedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    const area = arrayInput[1];
    const speed = arrayInput[0];

    const overSpeedLimit = speed - areasSpeedLimits[area];

    if (overSpeedLimit <= 0) {
        return;
    } else if (overSpeedLimit <= 20) {
        console.log('speeding');
    } else if (overSpeedLimit <= 40) {
        console.log('excessive speeding');
    } else {
        console.log('reckless driving')
    }
}

// roadRadar([200, 'motorway']);