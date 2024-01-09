export default function throttle() {
    let timerId, lastTime;
    return function(func,wait) {
      let now = +new Date();
      let that = this
      clearTimeout(timerId);
      if (lastTime && now && now < lastTime + wait) {
        timerId = setTimeout(() => {
          lastTime = now;
          func.apply(that)
        }, wait);
      } else {
        func.apply(that)
        lastTime = now;
      }
    }
}
