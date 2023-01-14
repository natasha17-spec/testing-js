const db = require("knex")(require("./knexfile").development);//подготвавливает пул соединений для отладочной базы данных
const closeConnection = ()=> db.destroy(); //уничтожает пул соединений

module.exports = {
    db,
    closeConnection
}