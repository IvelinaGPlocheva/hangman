const express = require("express");
const app = express();
const word = require("./api/word");

// Serving static files such as index.html from the 'public' directory
app.use(express.static('public'));

app.use("/api/word", word);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
