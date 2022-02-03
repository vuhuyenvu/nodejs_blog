// employee.controller.js 
'use strict';
const Employee = require('../../models/employee.model');

var dbConn = require('../../config/db/db.config');
class EmployeeController {
  getAll() {
   
    dbConn.query("Select * from employees", function (err, res) {
      
        if(err) {
          console.log("error: ", err);        
        }
        else{
          console.log('employees : ', res);
        
        }
    });
  };
}

module.exports = new EmployeeController();
