// employee.controller.js
'use strict';
const Employee = require('../../models/employee.model');

exports.getAll = function (req, res) {
    Employee.getAll(function (err, employee) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
