PORT = 3000; 

const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));



// Servir archivos estáticos desde "public"
app.use(express.static("public"));

// Rutas
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/info", (req, res) => res.render("info"));



app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})