function circleArea(str) {
    if (typeof(str) !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(str)}.`);
    } else {
        const area = Math.PI * (Number.parseFloat(str) ** 2);
        console.log(area.toFixed(2));
    }
}

// circleArea({'name' : 'Akatosh', 'age' : Infinity});
