var app = angular.module('student', []);

app.controller('studentCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.s = { 'name': "Anil", "email": 'abc@abcc.com', 'addr': 'Mumbai' };


    var roll = 1;


    $http.get('http://localhost:3000/users').then(function (response) {
        $scope.students = response['data']['data']
    })




    $scope.save = function () {
        if ($scope.s.roll == null) {
            $scope.s.roll = roll++;
            $http.post('http://localhost:3000/users/save', $scope.s).then(function (response) {
                alert("Data saved")
            })
            // $scope.students.push($scope.s);
        } else {
            $http.post('http://localhost:3000/users/update', $scope.s).then(function (response) {
                alert("Data Updated")
            })
            // for (i in $scope.students) {
            //     if ($scope.students[i].roll == $scope.s.roll) {
            //         $scope.students[i] = $scope.s;
            //     }
            // }
        }
        $http.get('http://localhost:3000/users').then(function (response) {
            $scope.students = response['data']['data']
        })
        $scope.s = {};
    }


    $scope.delete = function (roll) {
        $http.get('http://localhost:3000/users/delete/' + roll).then(function (response) {
            alert("Data deleted")
            $http.get('http://localhost:3000/users').then(function (response) {
                $scope.students = response['data']['data']
            })
        })
        // for (i in $scope.students) {
        //     if ($scope.students[i].roll == roll) {
        //         $scope.students.splice(i, 1);
        //         $scope.s = {};
        //     }
        // }
    }

    $scope.edit = function (roll) {
        $http.get('http://localhost:3000/users/getStudent/' + roll).then(function (response) {
            $scope.s = angular.copy(response['data']['data']);
            console.log("Data ", $scope.s)
        })

        // for (i in $scope.students) {
        //     if ($scope.students[i].roll == roll) {
        //         $scope.s = angular.copy($scope.students[i]);
        //     }
        // }
    }


}]);