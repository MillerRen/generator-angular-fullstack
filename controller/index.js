'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('angularjs-component:controller', {arguments: this.arguments}, { local: require.resolve('generator-angularjs-component/controller') });
  }
});

module.exports = Generator;