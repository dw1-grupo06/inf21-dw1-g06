'use strict';


/**
 * Retrieve Manufacturers based on Car ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveManufacturersOnCar = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "name",
  "founded" : 0,
  "description" : "description",
  "car_id" : 0
}, {
  "id" : 0,
  "name" : "name",
  "founded" : 0,
  "description" : "description",
  "car_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

