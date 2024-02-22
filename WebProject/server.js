// подключаем либы и задаём порт
const exspress = require('express');
const app = exspress();
const PORT = 1488;

//

app.get('/',(req, res) => {
    res.send('Поиск пидорасов активирован')
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту: ${PORT}`);
})