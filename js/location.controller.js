app.controller('LocationController', function($scope, $cordovaGeolocation) {
    $scope.lastLocation = {};
    $scope.currentLocation = {};

    $scope.lastPollingLocation = {};
    $scope.currentPollingLocation = {};

    var watch;
    var watchOptions = {
        timeout: 600000,
        maximumAge: 3000,
        enableHighAccuracy: true // may cause errors if true
    };

    var pollCurrentLocation = function() {
    	console.log('poll');
        $cordovaGeolocation.getCurrentPosition(watchOptions)
            .then(function(position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude

                console.log('polling lat long', lat, long);
                $scope.lastPollingLocation.lat = $scope.currentPollingLocation.lat;
                $scope.lastPollingLocation.long = $scope.currentPollingLocation.long;

                $scope.currentPollingLocation.lat = lat;
                $scope.currentPollingLocation.long = long;
            }, function(err) {
                // error
                console.log("polling error", err);
            });

        setTimeout(pollCurrentLocation, 1000);
    };

    var watchCurrentLocation = function() {
        watch = $cordovaGeolocation.watchPosition(watchOptions);
        watch.then(
            null,
            function(err) {
                // error
                console.log("watch error", err);
            },
            function(position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude

                console.log('lat long', lat, long);
                $scope.lastLocation.lat = $scope.currentLocation.lat;
                $scope.lastLocation.long = $scope.currentLocation.long;

                $scope.currentLocation.lat = lat;
                $scope.currentLocation.long = long;
            });
    };

    $scope.$on("$destroy", function() {
        if (watch) {
            watch.clearWatch();
        }
    });

    watchCurrentLocation();
    pollCurrentLocation();

})
