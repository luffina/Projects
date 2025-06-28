const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Use the updated OpenAI SDK constructor
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a friendly AI tutor that answers questions about Math, Science, and academic topics only.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    res.json({ reply: chat.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ reply: 'Something went wrong.' });
  }
});

app.listen(8000, () => console.log('🧠 Chatbot API running on http://localhost:8000'));
