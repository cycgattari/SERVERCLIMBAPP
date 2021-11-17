

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

app.use(bodyParser.json());  /* bodyParser.json() is deprecated */

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});


require("./app/routes/tutorial.routes")(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// listen on the port

app.listen(port, host, function() {
  console.log("Server started.......");
});

  



