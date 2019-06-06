const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("clicky-game/build"));
}
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__public, 'build', 'index.html'));
// });
app.listen(port);