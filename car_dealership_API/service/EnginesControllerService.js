'use strict';


/**
 * Create Engine
 *
 * body Engine  (optional)
 * returns Engine
 **/
exports.createEngine = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "name",
  "horsepower" : 0,
  "brand" : "brand",
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
 * Delete Engine
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteEngine = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "name",
  "horsepower" : 0,
  "brand" : "brand",
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
 * Retrieve engines
 *
 * returns List
 **/
exports.retrieveEngines = function() {
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


/**
 * Update Engine
 *
 * body Engine 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateEngine = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

