var schoolScheduleApp = angular.module('schoolScheduleApp', ['ngRoute']);

schoolScheduleApp.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'ScheduleCtrl',
      templateUrl: 'views/schedule/schedule.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});