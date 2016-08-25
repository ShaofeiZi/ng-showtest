/**
 * Created by Administrator on 2016/8/22.
 */
angular.module('main', ['ui.router', 'oc.lazyLoad'])
    //
    .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/menu');


        $stateProvider


            .state('/', {
                url: '/menu',
                templateUrl: 'view/menu.html',
                //controller: 'menuCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'css/menu.css'
                        //'js/liebiao.js'
                    ])
                }
            })
            .state('table',
                {
                    url: '/table?page&size',
                    templateUrl: 'view/table.html',
                    controller: 'tableCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        loadMyfile: _lazyLoad([
                            'css/table.css',
                            'js/table.js'
                        ])
                    }

                }
            )
            .state('vmtest',
                {
                    url: '/vmtest',
                    templateUrl: 'view/vm.html',
                    controller: 'vmtestCtrl',
                    controllerAs: 'fei',
                    resolve: {
                        loadMyfile: _lazyLoad([
                            'css/vmtest.css',
                            'js/vmtest.js'
                        ])
                    }

                }
            );


        //.state('baoming', {
        //    url: '/baoming',
        //    templateUrl: 'view/baoming.html',
        //    controller: 'baomingCtrl',
        //    resolve: {
        //        loadMyFile: _lazyLoad([
        //            'css/baoming.css',
        //            'js/baoming.js'
        //        ])
        //    }
        //})
        //.state('chakan', {
        //    url: '/chakan',
        //    templateUrl: 'view/chakan.html',
        //    cache: false,
        //    controller: 'chakanCtrl',
        //    data: {
        //        title: '学员详情'
        //    },
        //    resolve: {
        //        loadMyFile: _lazyLoad([
        //            'css/chakan.css',
        //            'js/chakan.js'
        //
        //
        //        ])
        //    }
        //})


    });
