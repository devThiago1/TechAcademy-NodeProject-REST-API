const mysql = require('mysql2/promise');

const connectToMySql = async () => {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const config = {
        host: "127.0.0.1",
        user: "root",
        password: "Leao1899*",
        database: "tech-academy"
    }
    
    const connection = await mysql.createConnection(config);
    console.log("Conexão realizada com sucesso");
    global.connection = connection;
}

connectToMySql();

module.exports = { connectToMySql };