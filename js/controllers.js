function MainCtrl($scope, $location) {
    $scope.menuItems = [
        {path: '/', label: 'Strona główna'},
        {path: '/o-kancelarii', label: 'O kancelarii'},
        {path: '/zespol', label: 'Zespół'},
        {path: '/uslugi', label: 'Usługi'},
        {path: '/kontakt', label: 'Kontakt'}
    ];

    $scope.$location = $location;
}