'use strict';
var sql = require('../utils/db.js');


/**
 * Create Car
 *
 * body Car  (optional)
 * returns Car
 **/
exports.createCar = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO car (name, description, color) values (?,?,?)", [body.name, body.description, body.color], function (err, res) {
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
 * Delete Car
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteCar = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM car WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Car
 *
 * id Long 
 * returns Car
 **/
 exports.retrieveCar = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM car WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Cars
 *
 * returns List
 **/
exports.retrieveCars = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM car", function (err, res) {
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
 * Update Car
 *
 * body Car 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateCar = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE car SET name = ?, description = ?, color = ? WHERE id = ?", [body.name, body.description, body.color, id], function (err, res) {
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

