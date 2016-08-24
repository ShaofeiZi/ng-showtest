/**
 * Created by Administrator on 2016/8/22.
 */
angular.module('main')
    .controller('tableCtrl', function (shuju, $scope, $state) {
        var wei = 1;
        var vm = this;
        //vm.data=shuju.query().then()
        var promise = shuju.query();
        promise.then(function (data) {  // 成功回调
            //vm.data = data;//不分页

            vm.data = data.slice(($scope.page * 1) * ($scope.size * 1) - ($scope.size * 1), ($scope.page * 1) * ($scope.size * 1));
            vm.wei = (Math.ceil(data.length / 10));

            //分页
        }, function () {  // 错误回调
            console.log('请求失败');
        });


        //vm.data = shuju.jiashuju;
        //console.log(shuju.jiashuju);


        //读取假数据
        //$http.get('js/tsconfig.json', {})
        //    .success(function (data) {
        //        if (code = 200) {
        //            alert("OK");
        //            vm.data = data.data;
        //        }
        //        else {
        //            alert('白瞎');
        //        }
        //    })
        //    .error(function () {
        //        alert("读取数据失败")
        //    });
        //console.log(vm.data);


        //1直接假数据
        //vm.data = [
        //    {
        //        label: 'ID',
        //        name: 'id',
        //        type: 'string'
        //    },
        //    {
        //        label: '姓名',
        //        name: 'name',
        //        type: 'string'
        //    },
        //    {
        //        label: '粉丝数',
        //        name: 'followers',
        //        type: 'number'
        //    },
        //    {
        //        label: '收入',
        //        name: 'income',
        //        type: 'currency'
        //    },
        //    {
        //        label: '',
        //        name: 'actions',
        //        sortable: false
        //    }
        //]
        //分页
        $scope.page = $state.params.page || 1;
        $scope.size = $state.params.size || 10;

        vm.nextPage = function () {   //上一页
            if ($scope.page < vm.wei) {
                $state.go($state.current, {page: ($scope.page * 1) + 1}, {reload: true})
            }
            else {
                alert("到底了");
            }
        };
        vm.lastPage = function () {  //下一页
            if ($scope.page > 1) {
                $state.go($state.current, {page: ($scope.page * 1) - 1}, {reload: true})
            }
            else {
                alert("已经首页了！");
            }
        };
        vm.topPage = function () {  //首页
            $state.go($state.current, {page: 1}, {reload: true})
        };
        vm.bottomPage = function () {  //尾页
            console.log(vm.wei);
            $state.go($state.current, {page: vm.wei}, {reload: true})
        }

    });