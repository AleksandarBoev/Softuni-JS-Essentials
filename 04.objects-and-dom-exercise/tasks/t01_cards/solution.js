function solve() { //judge error: 'playerOneCardImagesArray is not iterable'. Works fine locally...
    const playerOneCards = {};
    const playerTwoCards = {};

    const vsDiv = document.getElementById('result');
    const vsDivChildren = Array.of(vsDiv.children)[0];
    const playerOneVsSpan = vsDivChildren[0];
    const playerTwoVsSpan = vsDivChildren[2];
    const historyDiv = document.getElementById('history');

    const winnerBorder = '2px solid green';
    const looserBorder = '2px solid red';

    const processVsCards = () => {
        const playerOneCardValue = playerOneVsSpan.textContent;
        const playerTwoCardValue = playerTwoVsSpan.textContent;

        if (playerOneCardValue && playerTwoCardValue) { //if there are values in the spans
            const playerOneCardPower = Number.parseInt(playerOneCardValue);
            const playerTwoCardPower = Number.parseInt(playerTwoCardValue);

            if (playerOneCardPower > playerTwoCardPower) {
                playerOneCards[playerOneCardValue].style.border = winnerBorder;
                playerTwoCards[playerTwoCardValue].style.border = looserBorder;
            } else if (playerOneCardPower < playerTwoCardPower) {
                playerOneCards[playerOneCardValue].style.border = looserBorder;
                playerTwoCards[playerTwoCardValue].style.border = winnerBorder;
            } else {
                playerOneCards[playerOneCardValue].style.border = winnerBorder;
                playerTwoCards[playerTwoCardValue].style.border = winnerBorder;
            }

            playerOneVsSpan.textContent = '';
            playerTwoVsSpan.textContent = '';
            historyDiv.textContent += `[${playerOneCardValue} vs ${playerTwoCardValue}] `;
        }
    };

    const playerOneDiv = document.getElementById('player1Div');
    const playerOneCardImagesArray = Array.of(playerOneDiv.children)[0];

    for (let i = 0; i < playerOneCardImagesArray.length; i += 1) {
        const playerOneCard = playerOneCardImagesArray[i];
        playerOneCards[playerOneCard.name] = playerOneCard; //kvp = (name, imageElement)
        playerOneCard.addEventListener('click', () => {
            playerOneCard.setAttribute('src', 'images/whiteCard.jpg');
            playerOneVsSpan.textContent = playerOneCard.name;
            processVsCards();
        });
    }

    const playerTwoDiv = document.getElementById('player2Div');
    const playerTwoCardImagesArray = Array.of(playerTwoDiv.children)[0];

    for (let i = 0; i < playerTwoCardImagesArray.length; i += 1) { //copy paste code. Not good
        const playerTwoCard = playerTwoCardImagesArray[i];
        playerTwoCards[playerTwoCard.name] = playerTwoCard;
        playerTwoCard.addEventListener('click', () => {
            playerTwoCard.setAttribute('src', 'images/whiteCard.jpg');
            playerTwoVsSpan.textContent = playerTwoCard.name;
            processVsCards();
        });
    }
}