'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('angularjs-component:filter', {arguments: this.arguments}, { local: require.resolve('generator-angularjs-component/filter') });
  }
});

module.exports = Generator;