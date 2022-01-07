'use strict';

var utils = require('../utils/writer.js');
var ManufacturersController = require('../service/ManufacturersControllerService');

module.exports.createManufacturer = function createManufacturer (req, res, next, body) {
  ManufacturersController.createManufacturer(body)
    .then(ManufacturersController.retrieveManufacturers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteManufacturer = function deleteManufacturer (req, res, next, id) {
  ManufacturersController.deleteManufacturer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveManufacturer = function retrieveManufacturer (req, res, next, id) {
  ManufacturersController.retrieveManufacturer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveManufacturers = function retrieveManufacturers (req, res, next) {
  ManufacturersController.retrieveManufacturers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateManufacturer = function updateManufacturer (req, res, next, body, id) {
  ManufacturersController.updateManufacturer(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
