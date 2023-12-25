const express = require('express');
const homeRouter = require("./router/home_router");

const app = express();

/**
 * SETTING UP EXPRESS BOILER PLATE CODE
 */
app.use(express.static("eventon-christmas-master", {index: "eventon-christmas-master/"}));

//Body parser
app.use(express.urlencoded({extended: true}));

//Automatically parse application/json data
app.use(express.json());

// add a template engine to your app:
app.set("view engine", "pug");

// you can set the base views directory with:
app.set("views", "./eventon-christmas-master");

app.use(homeRouter);



app.listen(3000);
console.log("Server listening at http://localhost:3000");