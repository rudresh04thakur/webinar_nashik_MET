var app = angular.module('student', []);

    app.controller('studentCtrl', ['$scope', function($scope) {

      $scope.students = [];

    var roll = 1;
    $scope.save = function () {
        if ($scope.s.roll == null) {
            $scope.s.roll = roll++;
            $scope.students.push($scope.s);
        } else {
            for (i in $scope.students) {
                if ($scope.students[i].roll == $scope.s.roll) {
                    $scope.students[i] = $scope.s;
                }
            }
        }
        $scope.s = {};
    }

    
    $scope.delete = function (roll) {
        for (i in $scope.students) {
            if ($scope.students[i].roll == roll) {
                $scope.students.splice(i, 1);
                $scope.s = {};
            }
        }
    }

    $scope.edit = function (roll) {
        for (i in $scope.students) {
            if ($scope.students[i].roll == roll) {
                $scope.s = angular.copy($scope.students[i]);
            }
        }
    }


    }]);