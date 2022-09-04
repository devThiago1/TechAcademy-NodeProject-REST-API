const db = require('../index.js');
class StudentRepository {
    async findAll() {
      const conn = await db.connectToMySql();
      const query = "SELECT * FROM student";
      const students = await conn.query(query);
      return students;
    }

    async FindById(ra) {
      const conn = await db.connectToMySql();
      const query = "SELECT * FROM student WHERE ra = ?"
      const [student] = await conn.query(query, [ra]);

      return student;
    }

    async create(studentData) {
      const conn = await db.connectToMySql();
      const query = "INSERT INTO student(ra, nome, data_nascimento) VALUES (?,?,?)"
      const [student] = await conn.query(query, [
        studentData.ra,
        studentData.nome,
        studentData.data_nascimento
      ]);

      return student;
    }
  }
  
  module.exports = StudentRepository;