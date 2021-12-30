'use strict';
var sql = require('../utils/db.js');


/**
 * Create Owner
 *
 * body Owner  (optional)
 * returns Owner
 **/
exports.createOwner = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO owner (name, age, sex, car_id) values (?,?,?,?)", [body.name, body.age, body.sex, body.car_id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }else{
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}



/**
 * Delete Owner
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteOwner = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM owner WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      } else{
        console.log(res);
        resolve({"deleted ":id})
      }
    });
  });
}


/**
 * Retrieve Owner
 *
 * id Long 
 * returns Owner
 **/
exports.retrieveOwner = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM owner WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 * Retrieve Owners
 *
 * returns List
 **/
exports.retrieveOwners = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM engine", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Update Owner
 *
 * body Owner 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateOwner = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE owner SET name = ?, age = ?, sex = ?, car_id = ? WHERE id = ?", [body.name, body.age, body.sex, body.car_id, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}