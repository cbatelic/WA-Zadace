import lista from "./lista";

let dohvati = (req, res) => {
  res.send(`Brojevi: ${lista.join()}`);
};

export default dohvati