'use strict';

var utils = require('../utils/writer.js');
var CarsController = require('../service/CarsControllerService');

module.exports.createCar = function createCar (req, res, next, body) {
  CarsController.createCar(body)
    .then(CarsController.retrieveCars)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCar = function deleteCar (req, res, next, id) {
  CarsController.deleteCar(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCar = function retrieveCar (req, res, next, id) {
  CarsController.retrieveCar(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCars = function retrieveCars (req, res, next) {
  CarsController.retrieveCars()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCar = function updateCar (req, res, next, body, id) {
  CarsController.updateCar(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
