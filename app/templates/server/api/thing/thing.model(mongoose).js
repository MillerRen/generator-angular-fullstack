'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  created_time: {
    type: Date,
    default: new Date
  },
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
