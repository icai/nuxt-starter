/**
 * Simple throttle function that executes a passed function only once in the specified timeout
 * @param handlerFunc
 * @param [timeout] the throttle interval
 */
export function throttle(handlerFunc, timeout = 66) {
  let resizeTimeout
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      handlerFunc()
      // The actualResizeHandler will execute at a rate of 15fps
    }, timeout)
  }
}

export function debounce(fn, wait, isImmediate = false) {
  var timerId = null
  var flag = true
  if (isImmediate) {
    return function () {
      clearTimeout(timerId)
      if (flag) {
        fn.apply(this, arguments)
        flag = false
      }
      timerId = setTimeout(() => {
        flag = true
      }, wait)
    }
  }
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
