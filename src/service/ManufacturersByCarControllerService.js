'use strict';
var sql = require('../utils/db.js');


/**
 * Retrieve Manufacturers based on Car ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveManufacturersOnCar = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM manufacturer WHERE car_id = ?", [id], function (err, res) {
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