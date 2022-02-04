// employee.routes.js
const express = require('express');

const router = express.Router();

const employeeController = require('../app/controllers/employee.controller');

// Get all employees
router.get('/', employeeController.getAll);
// router.get('/', employeeController.index);

module.exports = router;
