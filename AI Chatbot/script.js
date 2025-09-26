document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("chat-form");
    const messageInput = document.getElementById("search");
    const chat = document.getElementById("chat");
    const sendBtn = document.getElementById("sendBtn");

    // Handle form submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (!message) return;

        appendMessage(escapeHtml(message), "user");
        messageInput.value = "";

        // Transition from initial centered state to chat view
        chat.classList.remove("initial-state");

        // Show typing dots
        const typingIndicator = document.createElement("div");
        typingIndicator.id = "typing-indicator";
        typingIndicator.classList.add("message", "bot");
        typingIndicator.innerHTML = `<div class="bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
        chat.appendChild(typingIndicator);
        chat.scrollTop = chat.scrollHeight;

        // Simulate a delay for the bot's response
        setTimeout(() => {
            chat.removeChild(typingIndicator);
            const botResponse = getBotResponse(message);
            // Display bot response
            appendMessage(formatBotResponse(botResponse), "bot");
        }, 1000 + Math.random() * 500); // Respond in 1-1.5 seconds
    });

    // Allow Enter to send (Shift+Enter for newline)
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });

    // Append a message
    function appendMessage(text, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);

        const bubbleContainer = document.createElement("div");
        bubbleContainer.classList.add("bubble-container");

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.innerHTML = text; // safe since formatted

        const timestamp = document.createElement("div");
        timestamp.classList.add("timestamp");
        const now = new Date();
        timestamp.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        bubble.appendChild(timestamp);
        bubbleContainer.appendChild(bubble);
        messageElement.appendChild(bubbleContainer);
        chat.appendChild(messageElement);
        chat.scrollTop = chat.scrollHeight;

        // Keep only last 50 messages
        if (chat.children.length > 50) {
            chat.removeChild(chat.firstChild);
        }
    }

    // Simple keyword-based bot logic
    function getBotResponse(userInput) {
        const message = userInput.toLowerCase();
        if (message.includes("hello") || message.includes("hi")) {
            return "Hello! How can I help you explore the culture of Bharat today?";
        } else if (message.includes("madhya pradesh") || message.includes("mp")) {
            return "Madhya Pradesh, the heart of India, is known for the Khajuraho temples, wildlife sanctuaries like Bandhavgarh, and the city of Ujjain, home to the Mahakaleshwar Jyotirlinga.";
        } else if (message.includes("food") || message.includes("eat")) {
            return "India has a diverse culinary landscape! From Rajasthan's Dal Baati Churma to Kerala's Sadya, there's a world of flavors. Which state's food are you curious about?";
        } else if (message.includes("festival")) {
            return "India is a land of festivals! Diwali (the festival of lights) and Holi (the festival of colors) are celebrated nationwide. Many regions also have unique festivals like Onam in Kerala and the Pushkar Camel Fair in Rajasthan.";
        } else if (message.includes("taj mahal")) {
            return "The Taj Mahal is a stunning white marble mausoleum in Agra, Uttar Pradesh. It was built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. It's a UNESCO World Heritage Site and a symbol of love.";
        } else if (message.includes("thank")) {
            return "You're welcome! Is there anything else I can help you with?";
        } else if (message.includes("bye")) {
            return "Goodbye! Enjoy exploring the rich heritage of Bharat.";
        } else {
            return "I'm still learning about the vast culture of India. Can you ask me about a specific state, festival, or famous place like the Taj Mahal?";
        }
    }

    // Format bot response, converting keywords to links
    function formatBotResponse(text) {
        const linkMap = {
            "Khajuraho temples": "../Khajuraho/index.html",
            "Ujjain": "../Ujjain/index.html",
            "Rajasthan": "../state.html?state=Rajasthan",
            "Kerala": "../state.html?state=Kerala",
            "Taj Mahal": "../state.html?state=Uttar%20Pradesh",
            "Pushkar Camel Fair": "../state.html?state=Rajasthan",
            "Madhya Pradesh": "../state.html?state=Madhya%20Pradesh",
            "Onam": "../state.html?state=Kerala",
            "Dal Baati Churma": "../state.html?state=Rajasthan"
        };

        let formattedText = escapeHtml(text);
        Object.keys(linkMap).forEach(key => {
            const regex = new RegExp(escapeHtml(key), 'gi');
            formattedText = formattedText.replace(regex, `<a href="${linkMap[key]}" target="_blank">${escapeHtml(key)}</a>`);
        });
        return formattedText.replace(/\n/g, "<br>");
    }

    // Escape HTML
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Format safely (convert newlines)
    function safeFormat(text) {
        return escapeHtml(text).replace(/\n/g, "<br>");
    }
});
