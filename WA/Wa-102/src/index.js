import express from "express";
import dodaj from "./dodaj";
import dohvati from "./dohvati";

const app = express(); 
const port = 3000; 

app.get("/dodaj", dodaj);
app.get("/dohvati", dohvati);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));