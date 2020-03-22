const http = require('http');
const https = require('https');
const express = require('express');
const hostname = '127.0.0.1';
const port = 9000;
const app = express();
const cors = require('cors');
app.use(cors());
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.get('/getFeed', (req, res) => {
  http.get('http://magiclab-twitter-interview.herokuapp.com/sundharasenthil/api?count=' + req.query.count, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.json(data);
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})
