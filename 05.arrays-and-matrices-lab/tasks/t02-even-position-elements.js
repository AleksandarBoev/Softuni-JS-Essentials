function evenPositionElements(arrayOfStrings) {
    arrayOfStrings = arrayOfStrings.filter(e => arrayOfStrings.indexOf(e) % 2 === 0);
    console.log(arrayOfStrings.join(' '));
}