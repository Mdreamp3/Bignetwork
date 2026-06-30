// ===== BigNetwork V1 =====

let coins = Number(localStorage.getItem("coins")) || 0;
document.getElementById("coins").innerText = coins;

let miningEnd = Number(localStorage.getItem("miningEnd")) || 0;
let boxEnd = Number(localStorage.getItem("boxEnd")) || 0;
let dailyEnd = Number(localStorage.getItem("dailyEnd")) || 0;

document.getElementById("mineBtn").onclick = function () {
  if (Date.now() < miningEnd) {
    alert("Mining already running!");
    return;
  }

  miningEnd = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem("miningEnd", miningEnd);
};

document.getElementById("boxBtn").onclick = function () {
  if (Date.now() < boxEnd) {
    alert("Mystery Box not ready!");
    return;
  }

  let reward = Math.floor(Math.random() * 151) + 50; // 50-200
  coins += reward;

  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerText = coins;

  alert("🎁 You won " + reward + " Coins!");

  boxEnd = Date.now() + 60 * 60 * 1000;
  localStorage.setItem("boxEnd", boxEnd);
};

document.getElementById("dailyBtn").onclick = function () {
  if (Date.now() < dailyEnd) {
    alert("Daily reward already claimed.");
    return;
  }

  coins += 500;

  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerText = coins;

  alert("🎉 Daily Reward: 500 Coins");

  dailyEnd = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem("dailyEnd", dailyEnd);
};

function format(ms) {
  let s = Math.floor(ms / 1000);
  let h = Math.floor(s / 3600);
  let m = Math.floor((s % 3600) / 60);
  let sec = s % 60;

  return h + "h " + m + "m " + sec + "s";
}

setInterval(() => {
  let now = Date.now();

  if (now < miningEnd) {
    document.getElementById("miningTimer").innerText =
      format(miningEnd - now);
  } else {
    document.getElementById("miningTimer").innerText =
      "✅ Ready
