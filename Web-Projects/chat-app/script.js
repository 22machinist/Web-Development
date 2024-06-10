document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages');

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = messageInput.value;
        socket.emit('sendMessage', message);
        messageInput.value = '';
    });

    socket.on('receiveMessage', (message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
});
