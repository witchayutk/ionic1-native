app.controller('CameraController', function($scope, $cordovaCamera) {
    $scope.result = '';
    $scope.camera = function() {
        document.addEventListener("deviceready", function() {

            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
            };

            $cordovaCamera.getPicture(options).then(function(imageURI) {
            	$scope.result = JSON.stringify(imageURI);
                var image = document.getElementById('myImage');
                image.src = imageURI;
            }, function(err) {
                // error
            });


        }, false);
    }


})
