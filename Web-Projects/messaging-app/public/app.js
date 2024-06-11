document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    async function fetchMessages() {
        const response = await fetch('/messages');
        const messages = await response.json();
        messagesDiv.innerHTML = '';
        messages.forEach(message => {
            const div = document.createElement('div');
            div.className = 'message';
            div.textContent = message.content;
            messagesDiv.appendChild(div);
        });
    }

    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = messageInput.value;
        await fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: message })
        });
        messageInput.value = '';
        fetchMessages();
    });

    fetchMessages();
});
