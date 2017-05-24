app.controller('ScannerController', function($scope, $cordovaBarcodeScanner) {
	$scope.result = '';
    $scope.click = function() {
        document.addEventListener("deviceready", function() {

            $cordovaBarcodeScanner
                .scan()
                .then(function(barcodeData) {
                	$scope.result = JSON.stringify(barcodeData);
                }, function(error) {
                    alert(error);
                });

        }, false);
    }


})
