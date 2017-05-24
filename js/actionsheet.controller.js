app.controller('ActionSheetController', function($scope, $cordovaActionSheet) {

    $scope.click = function() {
        var options = {
            title: 'This is action sheet from native',
            buttonLabels: ['Go to next Chapter', 'Share via ...'],
            addCancelButtonWithLabel: 'Cancel',
            androidEnableCancelButton: true,
            winphoneEnableCancelButton: true,
            addDestructiveButtonWithLabel: 'Close app'
        };

        document.addEventListener("deviceready", function() {
            $cordovaActionSheet.show(options)
                .then(function(index) {
                    alert(index);
                });
        }, false);
    }
})
