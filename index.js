const express = require("express");
const path = require("path");
const app = express();

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));

// Serve the landing.html file
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '../client/src/index_home.html'));
});

// get driver connection
const dbo = require("./database/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    // dbo.connectToServer();
    console.log(`Server is running on port: ${port}`);
});


