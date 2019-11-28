module.exports = function initRem (designWidth = 375) {
  // designWidth -> 设计稿基础宽度
  let baseSize    = 100;  // 倍数 100px = 1rem

  let _body = document.getElementsByTagName('html')[0];
  let bodyWidth = document.body.clientWidth;
  let coefficient = bodyWidth / designWidth;                // 系数

  let baseFontSize = (bodyWidth / (bodyWidth / baseSize)) * coefficient;  
  _body.style.fontSize = baseFontSize + 'px';
  
  window.addEventListener('resize', function (e) {
    bodyWidth = document.body.clientWidth;
    coefficient = bodyWidth / designWidth;

    baseFontSize = (bodyWidth / (bodyWidth / baseSize)) * coefficient;
    _body.style.fontSize = baseFontSize + 'px';
  });
};