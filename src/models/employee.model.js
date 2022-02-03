// employee.model.js
'use strict';

//Employee object create

var Employee = function(employee){
  this.first_name     = employee.first_name;
  this.last_name      = employee.last_name;
  this.email          = employee.email;
  this.phone          = employee.phone;
  this.organization   = employee.organization;
  this.designation    = employee.designation;
  this.salary         = employee.salary;
  this.status         = employee.status ? employee.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};


module.exports= Employee;
