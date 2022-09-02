const db = require('../index');
class StudentRepository {
    async findAll() {
      const conn = await db.connectToMySql();
      const query = "SELECT * FROM student";
      const students = await conn.query(query);
      return students;
    }
  }
  
  module.exports = StudentRepository;