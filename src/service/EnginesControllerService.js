'use strict';
var sql = require('../utils/db.js');


/**
 * Create Engine
 *
 * body Engine  (optional)
 * returns Engine
 **/
exports.createEngine = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO engine (name, horsepower, brand, car_id) values (?,?,?,?)", [body.name, body.horsepower, body.brand, body.car_id], function (err, res) {
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
 * Delete Engine
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteEngine = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM engine WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Engine
 *
 * id Long 
 * returns Engine
 **/
exports.retrieveEngine = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM engine WHERE id = ?", [id], function (err, res) {
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
 * Retrieve engines
 *
 * returns List
 **/
exports.retrieveEngines = function() {
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
 * Update Engine
 *
 * body Engine 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateEngine = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE engine SET name = ?, horsepower = ?, brand = ?, car_id = ? WHERE id = ?", [body.name, body.horsepower, body.brand, body.car_id, id], function (err, res) {
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