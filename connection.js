const mysql = require('mysql2/promise');


const conn = mysql.createPool(
    {
        "host": "localhost",
        "password": "",
        "user": "root",
        "port":3306,
        "database":"whatsapp_db",
    }
)
module.exports = conn;

conn.getConnection()
    .then(() => console.log('Banco conectado com sucesso!'))
    .catch(erro => console.log('Erro ao conectar ao banco:', erro.message));