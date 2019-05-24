function solve() {
    const trContainsString  = (tableRowElement, searchString) => {
        const tableDataStrings = Array.from(tableRowElement.children).map( e => e.textContent);
        for (let currentTdString of tableDataStrings) {
            if (currentTdString.includes(searchString))
                return true;
        }

        return false;
    };

    const markTableRowAsSelected = tableRowElement => tableRowElement.setAttribute('class', 'select');
    const removeSelectedFromAllTableRows = tableRows => {
        for (let i = 0; i < tableRows.length; i += 1)
            tableRows[i].removeAttribute('class');
    };

    const searchButtonElement = document.getElementById('searchBtn');
    const searchInputFieldElement = document.getElementById('searchField');
    const allTableRowElements = document.querySelectorAll('tbody tr');

    searchButtonElement.addEventListener('click', () => {
        removeSelectedFromAllTableRows(allTableRowElements);

        const searchedWordValue = searchInputFieldElement.value;

        for (let i = 0; i < allTableRowElements.length; i += 1) {
            const currentTableRow = allTableRowElements[i];
            if (trContainsString(currentTableRow, searchedWordValue)) {
                markTableRowAsSelected(currentTableRow);
            }
        }
    });
}