const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};

import * as math from 'mathjs'
const floatAdd = (arg1, arg2) => {
  // 加 解决精度问题
  const ans = math.add(arg1, arg2)
  return math.format(ans, {precision: 14})
}

export {
  debounce,
  floatAdd
}