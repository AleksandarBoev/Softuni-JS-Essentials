function validityChecker(arrayOfCoordinates) {
    const x1 = arrayOfCoordinates[0];
    const y1 = arrayOfCoordinates[1];
    const x2 = arrayOfCoordinates[2];
    const y2 = arrayOfCoordinates[3];

    const distance = (x1, y1, x2, y2) => { //should this variable follow UpperCamelCase convention?
        const calculateDistance = () => {
            const sideA = Math.abs(x1 - x2);
            const sideB = Math.abs(y1 - y2);

            return Math.sqrt((sideA * sideA) + (sideB * sideB));
        };

        const validString = () => {
            const isValid = calculateDistance() === Math.floor(calculateDistance());
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? 'valid' : 'invalid'}`
        };

        return {
            // getX1: () => x1,
            // getY1: () => y1,
            // getX2: () => x2,
            // getY2: () => y2,
            // getDistance: () => calculateDistance(),
            getValidString: () => validString()
        }
    };

    const distance1 = distance(x1, y1, 0, 0);
    const distance2 = distance(x2, y2, 0, 0);
    const distance3 = distance(x1, y1, x2, y2);

    console.log(distance1.getValidString());
    console.log(distance2.getValidString());
    console.log(distance3.getValidString());
}

// validityChecker([2, 1, 1, 1]);