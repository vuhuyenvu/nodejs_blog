// employee.controller.js
'use strict';
const Employee = require('../../models/employee.model');
var dbConn = require('../../config/db/db.config');

exports.index = function (req, res) {
    res.render('employee', {
        title: 'Add New Employee',
    });
};
exports.listemployees = function (req, res) {
    let sql = 'SELECT * FROM employees';
    let query = dbConn.query(sql, (err, employee) => {
        if (err) throw err;
        res.render('listemployees', {
            employees: employee,
            title: 'List Employees',
        });
    });
};
exports.edit = function (req, res) {
    let sql = 'SELECT * FROM employees where id = ?';
    let query = dbConn.query(sql, req.params.id, (err, employee) => {
        if (err) throw err;
        res.render('edit', {
            employees: employee[0],
            title: 'Edit Employees',
        });
    });
};
exports.newEmployee = function (req, res) {
    let data = { first_name: req.body.first_name, email: req.body.email };
    let sql = 'INSERT INTO employees SET ?';

    let query = dbConn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect(`/employee`);
        console.log('Create success.');
    });
};

exports.getAll = function (req, res) {
    Employee.getAll(function (err, employee) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
