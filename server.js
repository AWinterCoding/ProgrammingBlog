const session = require("express-session");
const express = require("express");
const ehb = require("express-handlebars");
const routes = require("./controller/routes");
const mysql2 = require("mysql2");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = ehb.create({});
app.use(express.static("view"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force:false}).then(() =>{
    app.listen(PORT, () => console.log(`App running on ${PORT}`));
});