(function flexible(window, document) {
  // 获取html标签
  var docEl = document.documentElement;
  // 获取设备像素比
  var dpr = window.devicePixelRatio || 1;

  // 设置body字体大小
  function setBodyFontSize() {
    // 判断是否已设置
    if (document.body) {
      // 设置body的字体大小
      document.body.style.fontSize = 12 * dpr + "px";
      
    } else {
      // 延迟执行
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 将屏幕宽度分成24份，1rem=1份
  function setRemUnit() {
    // 获取屏幕宽度
    var rem = docEl.clientWidth / 24;
    // 设置html的font-size
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // 监听屏幕宽度变化
  window.addEventListener("resize", setRemUnit);
  // 监听页面显示
  window.addEventListener("pageshow", function(e) {
    // 判断是否为缓存
    if (e.persisted) {
      setRemUnit();
    }
  });

  // 设置body的data-dpr属性
  if (dpr >= 2) {
    // 为html添加data-dpr属性
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    // 设置1像素边框
    testElement.style.border = ".5px solid transparent";
    // 将div添加到body中
    fakeBody.appendChild(testElement);
    // 将fakeBody添加到html中
    docEl.appendChild(fakeBody);
    // 判断是否为1像素
    if (testElement.offsetHeight === 1) {
      // 为html添加data-dpr属性
      docEl.classList.add("hairlines");
    }
    // 移除fakeBody
    docEl.removeChild(fakeBody);
  }
})(window, document);
