function createArticle() {
	const titleInputFieldElement = document.getElementById('createTitle');
	const titleValue = titleInputFieldElement.value;

	const createContentInputFieldElement = document.getElementById('createContent');
	const createContentValue = createContentInputFieldElement.value;

	if (!titleValue || !createContentValue)
	    return;

	titleInputFieldElement.value = '';
    createContentInputFieldElement.value = '';

    const newArticle = document.createElement('article');

    const newTitle = document.createElement('h3');
    newTitle.textContent = titleValue;

    const newParagraph = document.createElement('p');
    newParagraph.textContent = createContentValue;

    newArticle.appendChild(newTitle);
    newArticle.appendChild(newParagraph);

    document.getElementById('articles').appendChild(newArticle);
}