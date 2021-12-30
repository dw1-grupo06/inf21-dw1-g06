'use strict';
var sql = require('../utils/db.js');


/**
 * Create Owner
 *
 * body Owner  (optional)
 * returns Owner
 **/
exports.createOwner = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "name",
  "age" : 0,
  "sex" : "sex",
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
 * Delete Owner
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteOwner = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Owner
 *
 * id Long 
 * returns Owner
 **/
exports.retrieveOwner = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "name",
  "age" : 0,
  "sex" : "sex",
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
 * Retrieve Owners
 *
 * returns List
 **/
exports.retrieveOwners = function() {
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


/**
 * Update Owner
 *
 * body Owner 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateOwner = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

