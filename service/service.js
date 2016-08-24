/**
 * Created by Administrator on 2016/8/23.
 */
//读数据
angular.module('main')
    .factory('shuju', function ($http, $q, path) {

        return {
            query: function () {
                var deferred = $q.defer();//声明承诺
                $http({method: 'GET', url: path.duqushujus})
                    .success(function (data) {
                        if (code = 200) {
                            deferred.resolve(data.data);//请求成功
                        }

                    })
                    .error(function () {
                        alert("NONONO"); //请求失败
                    });
                return deferred.promise;   // 返回承诺，这里返回的<strong><span style="color: #ff0000;">不是数据</span></strong>，而是API
            }
        };


        //var shujutongbu = $q.defer();//声明承诺
        //
        //$http(path.duqushujus, {})
        //    .success(function (data) {
        //        if (code = 200) {
        //
        //            shujutongbu.resolve(data.data);
        //            jiashuju = data.data;
        //            alert(jiashuju);
        //            return jiashuju;
        //
        //        }
        //        else {
        //            alert('白瞎');
        //        }
        //    })
        //    .error(function () {
        //        alert("读取数据失败")
        //    });
        //alert(jiashuju);
        //return jiashuju;
    });