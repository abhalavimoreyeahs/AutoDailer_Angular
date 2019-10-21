const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Serve static files....
app.use(express.static(__dirname + '/dist/Angularnav'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Angularnav/index.html'));
});

// default Heroku PORT
app.listen(port, () => {
    console.log(`Angular Server running on port: ${port}`); // eslint-disable-line
  });