app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
    })

    .state('app.action-sheet', {
        url: '/action-sheet',
        views: {
            'menuContent': {
                templateUrl: 'templates/action-sheet.html',
                controller: 'ActionSheetController'
            }
        }
    })
    .state('app.scanner', {
        url: '/scanner',
        views: {
            'menuContent': {
                templateUrl: 'templates/scanner.html',
                controller: 'ScannerController'
            }
        }
    })
    .state('app.camera', {
        url: '/camera',
        views: {
            'menuContent': {
                templateUrl: 'templates/camera.html',
                controller: 'CameraController'
            }
        }
    })
    .state('app.location', {
        url: '/location',
        views: {
            'menuContent': {
                templateUrl: 'templates/location.html',
                controller: 'LocationController'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/action-sheet');
});
