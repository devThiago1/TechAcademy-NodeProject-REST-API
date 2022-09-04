const StudentService = require("../services/studentService");

exports.get = async (req, res, next) => {
  const payload = await new StudentService().getAllStudents();
  res.status(200).send(payload);
};

exports.getById = async (req, res, next) => {
  const payload = await new StudentService().getStudentById(req.params.id);
  res.status(200).send(payload);
};

exports.post = async (req, res, next) => {
  const payload = await new StudentService().createStudent(req.body);
  res.status(200).send(payload);
};
