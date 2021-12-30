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
    var examples = {};
    examples['application/json'] = {
  "color" : "color",
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
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
    var examples = {};
    examples['application/json'] = {
  "color" : "color",
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Cars
 *
 * returns List
 **/
exports.retrieveCars = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "color" : "color",
  "name" : "name",
  "description" : "description",
  "id" : 0
}, {
  "color" : "color",
  "name" : "name",
  "description" : "description",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

