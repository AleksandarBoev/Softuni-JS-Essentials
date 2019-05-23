function growingWord() {
    const colorsDivElement = document.getElementById('colors');
    let colors = [];
    const colorsDivElementChildren = Array.from(colorsDivElement.children); //works locally, but judge doesn't like it
    for (let currentDivColorElement of colorsDivElementChildren) { //throws: 'colorsDivElementChildren is not iterable'
        colors.push(currentDivColorElement.textContent.toLowerCase());
    }
    // colors = ['blue', 'green', 'red'];

    const setNextColor = (colors, paragraphElement) => {
        const currentColor = paragraphElement.style.color;
        if (!currentColor) {
            paragraphElement.style.color = colors[0];
            return;
        }

        const indexOfCurrentColor = colors.indexOf(currentColor);

        let nextColor = colors[indexOfCurrentColor + 1];
        if (nextColor === undefined) //outside of colors array
            paragraphElement.style.color = colors[0];
        else {
            paragraphElement.style.color = nextColor;
        }
    };

    const setNextFontSize = (paragraphElement) => {
        const currentFontSize = paragraphElement.style.fontSize;
        if (!currentFontSize)
            paragraphElement.style.fontSize = '2px';

        let numberValue = Number.parseInt(currentFontSize.substring(0, currentFontSize.length - 2));
        numberValue *= 2;
        paragraphElement.style.fontSize = numberValue + 'px';
    };

    const paragraphElement = document.querySelectorAll('div#exercise p')[0];
    setNextColor(colors, paragraphElement);
    setNextFontSize(paragraphElement);
}