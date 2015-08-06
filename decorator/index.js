'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('angularjs-component:decorator', {arguments: this.arguments}, { local: require.resolve('generator-angularjs-component/decorator') });
  }
});

module.exports = Generator;