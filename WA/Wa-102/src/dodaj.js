import lista from "./lista";

function rand(max) {
    return Math.floor(Math.random() * max);
  };


let dodaj = (req, res) => {
  let rBroj = rand(101);
  lista.push(rBroj);
  res.send(`Broj: ${parseInt(rBroj)}`);
};

export default dodaj