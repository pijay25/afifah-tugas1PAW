const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayout);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home", layout: "main" });
});

app.get("/buku", (req, res) => {
  res.json({
    status: "success",
    messege: "Daftar Lagu",
    buku: [
      { id: 1, title: "Buku Hana-tara-hata", author: "Penulis Tere Liye" },
      { id: 2, title: "ILY-Serial Bumi", author: "Penulis Tere Liye" },
      { id: 3, title: "Buku Pulang-pergi", author: "Penulis Tere Liye" },
      { id: 4, title: "Buku Sendiri", author: "Penulis Tere Liye" },
      { id: 5, title: "Buku HELLO", author: "Penulis Tere Liye" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server dapat diakses : http://localhost:${port}`);
});
