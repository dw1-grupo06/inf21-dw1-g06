'use strict';

var utils = require('../utils/writer.js');
var OwnersController = require('../service/OwnersControllerService');

module.exports.createOwner = function createOwner (req, res, next, body) {
  OwnersController.createOwner(body)
  .then(OwnerController.OwnerManufacturers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteOwner = function deleteOwner (req, res, next, id) {
  OwnersController.deleteOwner(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveOwner = function retrieveOwner (req, res, next, id) {
  OwnersController.retrieveOwner(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveOwners = function retrieveOwners (req, res, next) {
  OwnersController.retrieveOwners()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOwner = function updateOwner (req, res, next, body, id) {
  OwnersController.updateOwner(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
