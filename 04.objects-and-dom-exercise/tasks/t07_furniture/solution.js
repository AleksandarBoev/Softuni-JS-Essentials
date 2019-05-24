/* json:
[
    {
        "img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
        "name": "Sofa",
        "price": "259",
        "decFactor":"0.4"

    },
    {
        "img":"https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/7011671065_3dr_sonoma.jpg",
        "name": "Wardrobe",
        "price": "120",
        "decFactor":"1.2"
    }
]
 */

function solve() {
    const createTableDataAndPutElementInside = htmlElement => {
        const tableData = document.createElement('td');
        tableData.appendChild(htmlElement);
        return tableData;
    };

    const objectToTableRow = (furnitureObject) => {
        /*
        Example table row:
        <tr>
            <td>
                <img src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
            </td>
            <td>
                <p>Office chair</p>
            <td>
                <p>160</p>
            </td>
            <td>
                <p>0.5</p>
            </td>
            <td>
                <input type="checkbox" disabled />
            </td>
        </tr>
         */
        const tableRow = document.createElement('tr');

        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', furnitureObject['img']);
        tableRow.appendChild(createTableDataAndPutElementInside(imageElement));

        const productNameParagraphElement = document.createElement('p');
        productNameParagraphElement.textContent = furnitureObject['name'];
        tableRow.appendChild(createTableDataAndPutElementInside(productNameParagraphElement));

        const productPriceParagraphElement = document.createElement('p');
        productPriceParagraphElement.textContent = furnitureObject['price'];
        tableRow.appendChild(createTableDataAndPutElementInside(productPriceParagraphElement));

        const productDecorationFactorParagraphElement = document.createElement('p');
        productDecorationFactorParagraphElement.textContent = furnitureObject['decFactor'];
        tableRow.appendChild(createTableDataAndPutElementInside(productDecorationFactorParagraphElement));

        const checkBoxElement = document.createElement('input');
        checkBoxElement.setAttribute('type', 'checkbox');
        tableRow.appendChild(createTableDataAndPutElementInside(checkBoxElement));
        return tableRow;
    };

    const generateButtonElement = document.getElementsByTagName('button')[0];
    generateButtonElement.addEventListener('click', () => {
        const inputJsonTextAreaElement = document.getElementsByTagName('textarea')[0];
        const jsonValue = inputJsonTextAreaElement.value;
        const arrayOfFurnitureObjects = JSON.parse(jsonValue);

        const tableBodyElement = document.getElementsByTagName('tbody')[0];
        for (let currentFurnitureObject of Array.from(arrayOfFurnitureObjects)) {
            tableBodyElement.appendChild(objectToTableRow(currentFurnitureObject));
        }
    });

    const tableRowToObject = tableRow => {
        const furnitureElements = Array.from(tableRow.children).map(td => td.children[0]);

        const name = furnitureElements[1].textContent;
        const price = Number.parseFloat(furnitureElements[2].textContent);
        const decFactor = Number.parseFloat(furnitureElements[3].textContent);
        const isChecked = furnitureElements[4].checked; //i hope this is a boolean value

        return {
            'name': name,
            'price': price,
            'decFactor': decFactor,
            'isChecked': isChecked
        }
    };

    const buyButtonElement = document.getElementsByTagName('button')[1];
    buyButtonElement.addEventListener('click', () => {
        const furnitureTableRows = Array.from(document.querySelectorAll('tbody tr'));
        const furnitureBought = furnitureTableRows
            .map(tr => tableRowToObject(tr))
            .filter(furnitureObject => furnitureObject['isChecked']);

        const furnitureNames = [];
        let furnitureTotalPrice = 0;
        let decFactorTotalValue = 0;

        for (let currentFurniture of furnitureBought) {
            furnitureNames.push(currentFurniture['name']);
            furnitureTotalPrice += currentFurniture['price'];
            decFactorTotalValue += currentFurniture['decFactor'];
        }

        let decFactorAverage = decFactorTotalValue / furnitureBought.length;
        if (!decFactorAverage) //if it's NaN
            decFactorAverage = 0;

        let resultString = `Bought furniture: ${furnitureNames.join(', ')}\n`;
        resultString += `Total price: ${furnitureTotalPrice.toFixed(2)}\n`;
        resultString += `Average decoration factor: ${decFactorAverage}`;

        const textAreaShoppingResult = document.getElementsByTagName('textarea')[1];
        textAreaShoppingResult.value = resultString;
    });
}