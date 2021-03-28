import  data from './studenti.json'

let studenti = (req, res) => res.send(data.student)
let first = (req, res) => res.send(data.student[0])
let last = (req, res) => res.send(data.student[data.student.length - 1])


export default { studenti, first, last } 