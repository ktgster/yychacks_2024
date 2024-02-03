// index.js
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

//app.use(express.static("views", { "extensions": ["html", "htm"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3001;

// SERVER LISTEN ==================================================

server.listen(PORT, () => {
	console.log(`Server has started listening on port ${PORT}`);
});
