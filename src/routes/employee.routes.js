// employee.routes.js
const express = require('express');

const router = express.Router();

const employeeController = require('../app/controllers/employee.controller');

// Get all employees
router.get('/edit/:id', employeeController.edit);
router.get('/getall', employeeController.getAll);
router.post('/addEmployee', employeeController.newEmployee);

router.get('/listemployees', employeeController.listemployees);

router.get('/', employeeController.index);

module.exports = router;
