'use strict';
var sql = require('../utils/db.js');


/**
 * Retrieve Engines based on Car ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveEnginesOnCar = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "name",
  "horsepower" : 0,
  "brand" : "brand",
  "car_id" : 0
}, {
  "id" : 0,
  "name" : "name",
  "horsepower" : 0,
  "brand" : "brand",
  "car_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

