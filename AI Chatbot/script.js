// AI Chatbot/script.js (Updated with Markdown Parsing)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("chat-form");
    const messageInput = document.getElementById("message-input");
    const chat = document.getElementById("chat");
    const sendBtn = document.getElementById("send-btn");

    const BACKEND_URL = 'https://explore-bharat-api.onrender.com/chat';

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (!message) return;

        appendMessage(message, "user");
        messageInput.value = "";
        
        const typingIndicator = showTypingIndicator();

        try {
            const response = await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: message })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            appendMessage(data.reply, "bot");

        } catch (error) {
            console.error('Error:', error);
            appendMessage("Sorry, I'm having trouble connecting. Please try again later.", "bot");
        } finally {
            chat.removeChild(typingIndicator);
            chat.scrollTop = chat.scrollHeight;
        }
    });

    function showTypingIndicator() {
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("message", "bot");
        typingIndicator.innerHTML = `<div class="bubble-container"><div class="bubble typing-indicator"><span></span><span></span><span></span></div></div>`;
        chat.appendChild(typingIndicator);
        chat.scrollTop = chat.scrollHeight;
        return typingIndicator;
    }

    function appendMessage(text, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);

        const bubbleContainer = document.createElement("div");
        bubbleContainer.classList.add("bubble-container");

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        if (sender === "bot") {
            // Use marked.js to parse Markdown to HTML for bot messages
            bubble.innerHTML = marked.parse(text);
        } else {
            // For user messages, just use plain text
            bubble.textContent = text;
        }
        
        bubbleContainer.appendChild(bubble);
        messageElement.appendChild(bubbleContainer);
        chat.appendChild(messageElement);
        chat.scrollTop = chat.scrollHeight;
    }
});