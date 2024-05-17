const messageInput = document.getElementById('messageInput');
const chatMessages = document.querySelector('.chat-messages');

function sendMessage() {
    const message = messageInput.value;
    if (!message) return;

    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    saveChatMessages([...chatMessages.children].map(child => child.textContent));

    messageInput.value = '';
}

function saveChatMessages(messages) {
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function loadChatMessages() {
  const messages = localStorage.getItem('chatMessages');
  if (messages) {
    const parsedMessages = JSON.parse(messages);
    parsedMessages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
    });
  }
}

loadChatMessages();