const express = require("express");
const path = require("path");
const app = express();

// Позволяем серверу читать данные, которые присылает Битрикс (POST form data)
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(__dirname));

// ГЛАВНЫЙ ФОКУС:
// Если Битрикс шлет POST запрос (при открытии вкладки)
app.post("/", (req, res) => {
    // Мы берем все данные и перенаправляем их сами на себя, но уже как GET запрос
    const query = new URLSearchParams(req.body).toString();
    res.redirect("/?" + query);
});

// Если это обычный GET запрос (или редирект от поста выше)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
