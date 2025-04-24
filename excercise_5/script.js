function updateClock() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let formatedTime = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = formatedTime;
}
setInterval(updateClock, 1000);
