const express = require("express");
const path = require("path");
const app = express();

// Разрешаем получать данные из папки public (если вы захотите добавить картинки/css)
app.use(express.static(__dirname));

// Самое главное: на любой запрос (GET или POST) отдаем ваш HTML файл
app.all("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
