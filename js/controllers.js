function MainCtrl($scope, $location) {
    $scope.status = '';

    $scope.menuItems = [
        {path: '/strona-glowna', label: 'Strona główna'},
//        {path: '/o-kancelarii', label: 'O kancelarii'},
        {path: '/zespol', label: 'Zespół'},
        {path: '/uslugi', label: 'Usługi'},
//        {path: '/kontakt', label: 'Kontakt'}
    ];

    $scope.$location = $location;

    $scope.$on('$viewContentLoaded', function() {
        $scope.status = 'ready';
    })
}