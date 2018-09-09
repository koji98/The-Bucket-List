/* Requiring Packages/setup*/
const express = require('express');
const app = express();

/*Routes*/
const indexRoute = require('./routes/index')

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use('/', indexRoute)

app.listen(8000, () => console.log("PORT: 8000"))
