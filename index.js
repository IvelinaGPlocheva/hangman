const express = require("express");
const app = express();
const word = require("./api/word");

app.use(express.static('public'));
app.use(express.json({ extended: false }));

app.use("/api/word", word);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));