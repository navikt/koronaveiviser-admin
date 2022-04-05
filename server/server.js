const express = require("express");
const path = require("path");

const buildPath = path.join(__dirname, "/dist");
const app = express();
const port = 8080;

app.get(['/internal/isReady', '/person/koronaveiviser/admin/internal/isReady'], (req, res) => res.send("Ready!"));
app.get(['/internal/isAlive', '/person/koronaveiviser/admin/internal/isAlive'], (req, res) => res.send("Alive!"));
app.use(['/static', '/person/koronaveiviser/admin/static'], express.static(`${buildPath}/static`));
app.use('/*', (req, res) => res.sendFile(`${buildPath}/index.html`));

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
