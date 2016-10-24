/**
 * Created by liux on 2016/10/22.
 */
require.config({
    baseUrl: '',
    paths: {
        log: ['log'],
        jquery: ['../../public/jquery_3.1.0'],
        upload:['upload'],
        math:['math']
    },
    shim: {//配置没有按照AMD规范编写的库
        'underscore':{
            exports: '_'//模块在外部调用时的名称
        },
        'backbone': {
            deps: ['underscore', 'jquery'],//模块的依赖模块
            exports: 'Backbone'
        }
    }
});//配置require的对应关系

require(["jquery",'log'], function($,log) {
    log('index load',$);
    require(['math'], function (math){
        alert(math.add(1,1));
    });
});//定义一个启动函数
