// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    // arm.delete(tableName, db condition, cb)
    orm.delete("burgers", condition, res => {
    cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_llerontr.js).
module.exports = burgers;
