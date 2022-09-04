const StudentRepository = require('../database/repositories/studentRepository.js');

class StudentService {
    constructor() {
        this.repository = new StudentRepository();
    }

    async getAllStudents(){
        return this.repository.findAll();
    }

    async getStudentById(ra){
        return this.repository.FindById(ra);
    }

    async createStudent(student) {
        return this.repository.create(student);
    }  
};

module.exports = StudentService;