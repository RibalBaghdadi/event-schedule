const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Simple DeepSeek chat implementation
    const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant for an event management app. Help users with event-related questions, scheduling, and planning.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error('DeepSeek API error:', error.response?.data || error.message);
    res.json({ reply: 'I apologize, but I cannot respond right now. Please try again later.' });
  }
});

module.exports = router;