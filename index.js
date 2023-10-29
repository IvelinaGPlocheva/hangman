const express = require('express');
const axios = require('axios');
const app = express();

// Serving static files such as index.html from the 'public' directory
app.use(express.static('public/dist'));


// Creating a new endpoint to fetch the word from the external API
app.get('/getWord', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/randomword?type=noun', {
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    });

    res.json(response.data); // Sending the data as a JSON response
  } catch (error) {
    res.status(500).send(error.message || error);
  }
});

// Starting the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
