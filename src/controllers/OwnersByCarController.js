'use strict';

var utils = require('../utils/writer.js');
var OwnersByCarController = require('../service/OwnersByCarControllerService');

module.exports.retrieveOwnersOnCar = function retrieveOwnersOnCar (req, res, next, id) {
  OwnersByCarController.retrieveOwnersOnCar(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
