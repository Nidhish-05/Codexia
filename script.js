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

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.listen(port, ()=>{
    console.log("Running on server: " + port);
})