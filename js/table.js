/**
 * Created by Administrator on 2016/8/22.
 */
angular.module('main')
    .controller('tableCtrl', function (shuju, $scope, $state) {

        var vm = this;
        var promise = shuju.query();
        promise.then(function (data) {  // 成功回调
            //vm.data = data;//不分页

            vm.data = data.slice(($scope.page * 1) * ($scope.size * 1) - ($scope.size * 1), ($scope.page * 1) * ($scope.size * 1));
            vm.wei = (Math.ceil(data.length / 10));

            //分页
        }, function () {  // 错误回调
            console.log('请求失败');
        });
        console.log($scope.xuan);


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
        //console.log($scope.params.size);

        $scope.page = $state.params.page || 1;
        $scope.size = $state.params.size || 10;
        //console.log($scope.params.size);

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
        //选的ID
        vm.flag = false;
        vm.xuanzhong=[];//存选中的数据
        $scope.all = function (c, d) {
            console.log(c);
            if (c === false) {
                //$scope.xuan = true;
                //vm.xuanzhong = [""];
                vm.flag = false;
                console.log(vm.flag);
                console.log('不选了？');
            } else {
                console.log("bbb");
                //vm.data = true;
                vm.flag = true;


                for (var i = 0; i < $scope.size; i++) {
                    vm.xuanzhong[i] = '' + vm.data[i].id + '';

                    console.log(vm.data[i].id + "被选中");
                }
                //console(vm.xuanzhong);

            }


        }
        $scope.chk = function (a, b) {
            console.log($scope.size);
            if (vm.flag === true) {   //全选过了
                alert(a);
                alert(b);
                console.log(vm.flag);
                for (var i = 0; i < $scope.size; i++) {

                    console.log(vm.data[i].id + "被选中");
                }
            }
            else {
                //vm.xuanzhong=
                console.log("选中了" + a);
                console.log(b);
                vm.flag = true;
            }

        };


    });