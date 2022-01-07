'use strict';

var utils = require('../utils/writer.js');
var EnginesByCarController = require('../service/EnginesByCarControllerService');

module.exports.retrieveEnginesOnCar = function retrieveEnginesOnCar (req, res, next, id) {
  EnginesByCarController.retrieveEnginesOnCar(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
