'use strict';

var utils = require('../utils/writer.js');
var EnginesController = require('../service/EnginesControllerService');

module.exports.createEngine = function createEngine (req, res, next, body) {
  EnginesController.createEngine(body)
    .then(EnginesController.retrieveEngine)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEngine = function deleteEngine (req, res, next, id) {
  EnginesController.deleteEngine(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEngine = function retrieveEngine (req, res, next, id) {
  EnginesController.retrieveEngine(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEngines = function retrieveEngines (req, res, next) {
  EnginesController.retrieveEngines()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEngine = function updateEngine (req, res, next, body, id) {
  EnginesController.updateEngine(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
