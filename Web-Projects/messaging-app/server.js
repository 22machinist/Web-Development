const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

db.serialize(() => {
    db.run("CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT)");
});

app.get('/messages', (req, res) => {
    db.all("SELECT * FROM messages", [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows);
    });
});

app.post('/messages', (req, res) => {
    const { content } = req.body;
    db.run("INSERT INTO messages (content) VALUES (?)", [content], function (err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(201).json({ id: this.lastID, content });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
