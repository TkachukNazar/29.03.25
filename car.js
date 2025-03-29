let timer;
let left = 0;
function move(id, toRight) {
  stop();
  let elem = document.getElementById(id);
  function frame() {
    if (left < 350 && toRight) {
      left++;
    } else if (left > 0 && !toRight) {
      left--;
    }
    elem.style.left = left + "px";
  }
  timer = setInterval(frame, 10);
}
function stop() {
  clearInterval(timer);
}
