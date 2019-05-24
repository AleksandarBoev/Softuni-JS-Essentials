function solve() {
    const formatAddedProduct = (productName, productPrice) =>
        `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

    const textAreaElement = document.getElementsByTagName('textarea')[0];
    const productsNameTotalPrice = {};

    const productDivs = document.getElementsByClassName('product');

    for (let i = 0; i < productDivs.length; i += 1) {
        const productName = productDivs[i].getElementsByClassName('product-title')[0].textContent;
        const productPrice = Number.parseFloat(productDivs[i].getElementsByClassName('product-line-price')[0].textContent);

        const addButtonElement = productDivs[i].getElementsByClassName('add-product')[0];
        addButtonElement.addEventListener('click', () => {
            if (!productsNameTotalPrice[productName])
                productsNameTotalPrice[productName] = 0;

            productsNameTotalPrice[productName] += productPrice;

            textAreaElement.value += formatAddedProduct(productName, productPrice);
        });
    }

    const formatBoughtProducts = products => {
        const productNames = [];
        let totalCost = 0;

        for (let productName in products) {
            productNames.push(productName);
            totalCost += products[productName];
        }

        return `You bought ${productNames.join(', ')} for ${totalCost.toFixed(2)}.`;
    };

    const checkoutButtonElement = document.getElementsByClassName('checkout')[0];
    checkoutButtonElement.addEventListener('click', () => {
        textAreaElement.value += formatBoughtProducts(productsNameTotalPrice);
        const allButtons = document.getElementsByTagName('button');

        for (let i = 0; i < allButtons.length; i += 1)
            allButtons[i].setAttribute('disabled', '');
    });
}