'use strict';
var sql = require('../utils/db.js');


/**
 * Create Manufacturer
 *
 * body Manufacturer  (optional)
 * returns Manufacturer
 **/
exports.createManufacturer = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO manufacturer (name, founded, description, car_id) values (?,?,?,?)", [body.name, body.founded, body.description, body.car_id], function (err, res) {
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
 * Delete Manufacturer
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteManufacturer = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM manufacturer WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Manufacturer
 *
 * id Long 
 * returns Manufacturer
 **/
exports.retrieveManufacturer = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM manufacturer WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Manufacturers
 *
 * returns List
 **/
exports.retrieveManufacturers = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM manufacturer", function (err, res) {
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
 * Update Manufacturer
 *
 * body Manufacturer 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateManufacturer = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE manufacturer SET name = ?, founded = ?, description = ?, car_id = ? WHERE id = ?", [body.name, body.founded, body.description, body.car_id, id], function (err, res) {
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