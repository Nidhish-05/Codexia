import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import passport from "passport";
import env from "dotenv";

const port = 3000;
const app = express();
env.config();
const db = new pg.Client({
    user: process.env.PG_USER,
    host:process.env.PG_HOST,
    database:process.env.PG_DATABASE,
    password:process.env.PG_PASSWORD,
    port:process.env.PG_PORT
})
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/home", (req, res)=>{
    res.render("index.ejs");
});

app.get("/", (req, res)=>{
    res.redirect("/home");
})

app.get("/login", (req, res)=>{
    res.render("login.ejs");
});

app.get("/register", (req, res)=>{
    res.render("register.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});

app.get("/faq", (req, res)=>{
    res.render("faq.ejs");
});

app.get("/explore", (req, res)=>{
    res.render("explore.ejs");
});

app.listen(port, ()=>{
    console.log("Running on server: " + port);
})