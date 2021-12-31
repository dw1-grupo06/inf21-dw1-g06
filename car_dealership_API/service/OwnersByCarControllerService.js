'use strict';


/**
 * Retrieve Owners based on Car ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveOwnersOnCar = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "name",
  "age" : 0,
  "sex" : "sex",
  "car_id" : 0
}, {
  "id" : 0,
  "name" : "name",
  "age" : 0,
  "sex" : "sex",
  "car_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

