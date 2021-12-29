'use strict';


/**
 * Create Manufacturer
 *
 * body Manufacturer  (optional)
 * returns Manufacturer
 **/
exports.createManufacturer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "name",
  "founded" : 0,
  "description" : "description",
  "car_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
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
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "name",
  "founded" : 0,
  "description" : "description",
  "car_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Manufacturers
 *
 * returns List
 **/
exports.retrieveManufacturers = function() {
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


/**
 * Update Manufacturer
 *
 * body Manufacturer 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateManufacturer = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

