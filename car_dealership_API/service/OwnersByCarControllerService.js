'use strict';
var sql = require('../utils/db.js');


/**
 * Retrieve Owners based on Car ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveOwnersOnCar = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM owner WHERE car_id = ?", [id], function (err, res) {
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