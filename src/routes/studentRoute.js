const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')

router.get('/', studentController.get);
router.get("/:id", studentController.getById);
router.post("/", studentController.post)

module.exports = router;