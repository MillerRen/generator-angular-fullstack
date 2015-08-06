'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('angularjs-component:factory', {arguments: this.arguments}, { local: require.resolve('generator-angularjs-component/factory') });
  }
});

module.exports = Generator;