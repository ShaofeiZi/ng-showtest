/**
 * Created by Administrator on 2016/8/15.
 */
angular.module('main', ['ngMessages'])
    .controller('baomingCtrl', function ($scope, $http) {


        $scope.baoming = function () {
            var jointimes = Date.parse($scope.addtime);

            var datas = {
                name: $scope.addname,
                qq: $scope.addqq,
                school: $scope.addschool,
                type: $scope.addtype,
                level: $scope.addlevel,
                joinTime: jointimes,
                wish: $scope.addwish
            };


            console.log(datas);


            $http({
                method: 'post',
                url: "/a/student",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(datas)
            }).success(function () {
                alert("添加成功");
                //$state.go('main.home');
            });



        }


    });
