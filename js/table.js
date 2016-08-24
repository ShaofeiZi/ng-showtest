/**
 * Created by Administrator on 2016/8/22.
 */
angular.module('main')
    .controller('tableCtrl', function (shuju) {
        var vm = this;
        var promise = shuju.query();
        promise.then(function(data) {  // 成功回调
            vm.data = data;
        }, function() {  // 错误回调
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
    });