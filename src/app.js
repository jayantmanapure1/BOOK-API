const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000; 

require("../src/db/conn");

const Books = require("../src/models/books");

const router = require("../src/routers/book");

app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send("Something broke!");
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
