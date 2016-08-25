/**
 * Created by Administrator on 2016/8/23.
 */
//读数据
angular.module('main')
    .factory('shuju', function ($http, $q, path,$state) {

        //var shuju=$q.defer();
        //var shujup=shuju.promise();

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
                console.log(deferred.promise);
                return deferred.promise;
                // 返回承诺
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


        //翻页


    });