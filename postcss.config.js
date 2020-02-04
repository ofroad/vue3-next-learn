module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 8,
      selectorBlackList: ['one-', 'onec', 'bpad', 'ubtop'], // 忽略转换正则匹配项
      propList: ['*'],
      mediaQuery: false
    }
  }
};
