'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('angularjs-component:service', {arguments: this.arguments}, { local: require.resolve('generator-angularjs-component/service') });
  }
});

module.exports = Generator;