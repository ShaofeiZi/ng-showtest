/**
 * Created by Administrator on 2016/8/16.
 */
angular.module('main')
	.controller('chakanCtrl', function ($scope, $http, $filter,$state) {
		$scope.xiugai=function(){
			//$state.go("chakan", {}, {ad: true});
			$state.go($state.current,{}, {reload: true});
		};


		var id = JSON.parse(sessionStorage.id);
		console.log(id);
		$http.get('/a/student/' + id, {})
			.success(function (data) {
				$scope.addname = data.name;
				$scope.addqq = data.qq;
				$scope.addschool = data.school;
				$scope.talent = data.talent;
				$scope.addlevel = data.level;
				$scope.addtype = data.type;
				$scope.joinTimea = data.joinTime;
				console.log("1" + $scope.joinTimea);
				$scope.joinTime = $filter('date')($scope.joinTimea, 'yyyy-MM-dd');
				$scope.addwish = data.wish;
			})
			.error(function () {
				alert("读取数据失败")
			});
		$scope.chakan = function () {
			var jointimes = Date.parse($scope.joinTime);
			var datas = {
				name: $scope.addname,
				qq: $scope.addqq,
				school: $scope.addschool,
				type: $scope.addtype,
				level: $scope.addlevel,
				joinTime: jointimes,
				wish: $scope.addwish,
				talent: $scope.talent
			};

			console.log(datas);
			$http({
				method: 'PUT',
				url: "/a/student/" + id,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: $.param(datas)
			}).success(function (res) {
					if (res.code == 200) {
						alert("添加成功");
					}
					else {
						alert("失败");
					}
				})
				.error(function () {
					alert("失败");
				})
		}

	});
