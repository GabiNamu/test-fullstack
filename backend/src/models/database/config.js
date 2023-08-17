import * as sqlite3 from 'sqlite3';
const db = new sqlite3.Database('src/models/database/client.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) return console.error(err);
});

const sql = 'CREATE TABLE IF NOT EXISTS client(ID INTEGER PRIMARY KEY, name TEXT, email TEXT, cpf TEXT, cell TEXT, status BOOLEAN)';
db.run(sql);

export default db;