'use strict'

angular.module '<%= scriptAppName %>'
<% if(filters.ngroute) { %>.config ($routeProvider) ->
  $routeProvider
  .when '/admin',
    templateUrl: 'app/admin/admin.html'
    controller: 'AdminCtrl'
<% } %><% if(filters.uirouter) { %>.config ($stateProvider) ->
  $stateProvider
  .state 'admin',
    url: '/admin'
    templateUrl: 'app/admin/admin.html'
    controller: 'AdminCtrl'
<% } %><% if(filters.routesegment) { %>.config ($routeSegmentProvider) ->
  $routeSegmentProvider
  .when '/admin', 'admin'
  .segment 'admin',
    templateUrl: 'app/admin/admin.html'
    controller: 'AdminCtrl'
<% } %>
