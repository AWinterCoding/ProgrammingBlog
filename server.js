const session = require("express-session");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require("./controller/routes");
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const help = require('./utils/test');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static("views"));

const sess = {
    secret: 'This is a session',
    cookie:{
        maxAge: 100000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const handleEnv = expressHandlebars.create({help});
app.engine("handlebars", handleEnv.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`App running on ${PORT}`));
});