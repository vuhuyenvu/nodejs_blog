// employee.model.js
'use strict';
var dbConn = require('../config/db/db.config');

//Employee object create

var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Employee.getAll = function (result) {
    dbConn.query('Select * from employees', function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
module.exports = Employee;
