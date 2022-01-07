'use strict';

var utils = require('../utils/writer.js');
var ManufacturersByCarController = require('../service/ManufacturersByCarControllerService');

module.exports.retrieveManufacturersOnCar = function retrieveManufacturersOnCar (req, res, next, id) {
  ManufacturersByCarController.retrieveManufacturersOnCar(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
