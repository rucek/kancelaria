var officeApp = angular.module('officeApp', [], function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/strona-glowna', {templateUrl: 'partials/home.html', controller: MainCtrl}).
        when('/o-kancelarii', {templateUrl: 'partials/about.html', controller: MainCtrl}).
        when('/zespol', {templateUrl: 'partials/team.html', controller: MainCtrl}).
        when('/uslugi', {templateUrl: 'partials/services.html', controller: MainCtrl}).
        when('/kontakt', {templateUrl: 'partials/contact.html', controller: MainCtrl}).
        otherwise({redirectTo: '/strona-glowna'});

    $locationProvider.hashPrefix('!');
});