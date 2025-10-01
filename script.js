const btnMusic = document.getElementById("btn-music");
const bgMusic = document.querySelector(".bg-music");

btnMusic.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    btnMusic.innerText = "Pause Music";
  } else {
    bgMusic.pause();
    btnMusic.innerText = "Play Music";
  }
});

const btn = document.querySelector("#emoji");
const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😙",
  "😚",
  "🙂",
  "🤗",
  "🤩",
  "🤔",
  "🤨",
  "😐",
  "😑",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "🤐",
  "😯",
  "😪",
  "😫",
  "🥱",
  "😴",
  "😌",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤤",
  "😒",
  "😓",
  "😔",
  "😕",
  "🙃",
  "🤑",
  "😲",
  "☹️",
];
btn.addEventListener("mouseover", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
