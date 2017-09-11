/**
 * @file 开发环境相关配置文件
 * @author 王阳(wy23623@ly.com)
 */

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
