import express from 'express';
import moment from 'moment';

const app = express()
const port = 3000

const vrijeme = moment().format('DD.MM.YYYY HH:mm');

var recenica = new Array();
recenica[0] = 'Sunčano';
recenica[1] = 'Kišovito';
recenica[2] = 'Oblačno';

const home = "Na adresi localhost:3000/datum nalazi se trenutno vrijeme, a na adresi localhost:3000/prognoza nasumična rečenica koja opisuje kakvo će vrijeme danas biti!"

app.get('/datum', (req, res) => { 
    res.send (`Trenutno vrijeme je: ${vrijeme}`)
})

app.get('/prognoza', (req, res) => { 
    var rand =  [Math.floor(Math.random() * recenica.length)];
       
    res.send (`Danas će biti: ${recenica[rand]}`)
})

app.get('/', (req, res) => { 
    res.send (`${home}`)
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))