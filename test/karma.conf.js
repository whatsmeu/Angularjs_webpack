module.exports = function(config) {
    config.set({

        // 基路径：表示karma从那个位置开始找文件
        basePath: '',


        // 框架
        frameworks: ['jasmine'],


        // 测试的入口文件
        files: ['../test/unit/index.js'],


        // 排除的文件，可以是正则
        exclude: [],


        // 对指定文件的preprocess(预处理)
        preprocessors: {
            '../test/unit/index.js': ['webpack', 'sourcemap'],
            '../src/**/*.js': ['webpack', 'sourcemap', 'coverage', 'coverage'] //表示那些代码需要生成测试覆盖率报表
        },


        // 结果报表
        reporters: ['progress'],


        // 服务器端口
        port: 9876,


        // 报表中是否有颜色区分
        colors: true,


        // 输出的日志级别
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // 文件变化是否自动刷新
        autoWatch: true,


        // 测试的测试器环境
        browsers: ['PhantomJS'],


        // 是否依附浏览器运行
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // 并发个数，同时支持在多少个浏览器运行
        // how many browser should be started simultaneous
        concurrency: Infinity,

        //webpack配置
        webpack: webpackConfig,

        //代码覆盖率配置节点
        coverageReporter: {
            dir: './converage',
            reporters: [{
                type: 'lcov',
                subdir: '.'
            }, {
                type: 'text-summary'
            }],

        }
    })
}