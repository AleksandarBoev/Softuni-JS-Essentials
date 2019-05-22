function generateHeaderText() {
    const headerElement = document.getElementById('header_id');
    headerElement.innerText = 'Hello from classic function!';

    headerElement.style.fontSize = fontSize++ + 'pt'; //getting the font size is tricky
}

const generateHeaderText2 = () => {
    const headerElement = document.getElementsByClassName('header_class')[0];
    headerElement.innerHTML = 'Hello from fat-arrow function!';
    headerElement.style.color = 'red';
};

