import express from 'express';
import routes from './routes';

const app = express() 
const port = 3000

app.get('/studenti', routes.studenti)
app.get('/studenti/first', routes.first)
app.get('/studenti/last', routes.last)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))