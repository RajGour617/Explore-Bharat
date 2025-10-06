// server.js (FINAL CODE with gemini-pro)
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
  console.error("FATAL ERROR: GEMINI_API_KEY is not defined in your .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
  try {
    // Using the model name compatible with the library version
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const userInput = req.body.message;
    if (!userInput) {
      return res.status(400).json({ error: "Message field is required." });
    }

    const result = await model.generateContent(userInput);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    res.status(500).json({ error: "Something went wrong while communicating with the AI!" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});