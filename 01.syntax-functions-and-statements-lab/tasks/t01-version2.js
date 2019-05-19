function stringLength(...params) {
    let totalLength = 0;
    params.forEach(e => totalLength += e.length);
    const averageLength = Math.floor(totalLength / params.length);

    console.log(totalLength);
    console.log(averageLength);
}

// stringLength('pasta', '5', '22.3');