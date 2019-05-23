function solve() {
    const textAreaChatInput = document.getElementById('chat_input');
    const messagesDivElement = document.getElementById('chat_messages');

    const sendButtonElement = document.getElementById('send');
    sendButtonElement.addEventListener('click', () => {
        const message = textAreaChatInput.value;
        textAreaChatInput.value = '';
        const newMessageDivElement = document.createElement('div');
        newMessageDivElement.setAttribute('class', 'message my-message');
        newMessageDivElement.textContent = message;
        messagesDivElement.appendChild(newMessageDivElement);
    });
}


