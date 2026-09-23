const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ให้เข้าถึงไฟล์ใน public
app.use(express.static(path.join(__dirname, "public")));

// /home
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.htm"));
});

// /menu
app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "info", "menu.htm"));
});

// /order
app.get("/order", (req, res) => {
    res.sendFile(path.join(__dirname, "info", "order.htm"));
});

// /item/:name/:price
app.get("/item/:name/:price", (req, res) => {
    const name = req.params.name;
    const price = req.params.price;

    res.send(`
        <h1>${name}</h1>
        <h2>ราคา ${price} บาท</h2>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});