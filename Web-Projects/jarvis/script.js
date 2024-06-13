const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;
    
    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);

    // Clear input field
    userInput.value = '';

    // Scroll to the bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get chatbot's response
    getBotResponse(message);
}

function getBotResponse(message) {
    let response;
    switch (message.toLowerCase()) {
        case 'hi':
            response = 'Hi there!';
            break;
        case 'how are you?':
            response = ' I am doing great!';
            break;
        case 'Who are you ?':
            response = ' I am Jarvis , created by Ashutosh Sharma';
            break;
        case 'bye':
            response = 'Goodbye!';
            break;
        default:
            response = 'Sorry, I did not understand that.';
    }

    // Display bot's response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerText = response;
    chatBox.appendChild(botMessage);

    // Scroll to the bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow pressing "Enter" to send the message
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
