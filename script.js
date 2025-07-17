const genres = {
  lofi: [
    "https://soundcloud.com/lofi_girl/summer-in-rio",
    "https://soundcloud.com/chillhopdotcom/my-steeze",
    "https://soundcloud.com/chillhopdotcom/driving-6",
    "https://soundcloud.com/chillhopdotcom/dry-leaves-ft-9ick-3",
    "https://soundcloud.com/chillhopdotcom/spykids",
    "https://soundcloud.com/oa2kgu71xhzv/downtown-binary-lost-signal",
    "https://soundcloud.com/lofi_girl/downtown-binary-cosmos",
    "https://soundcloud.com/chiccotesbeats/lullaby-pt2",
    "https://soundcloud.com/noah-gonzalez-522532724/swum-x-chief-show-me-how"
  ],
  breakcore: [
    "https://soundcloud.com/tokyopill/ethereal",
    "https://soundcloud.com/rorynearly20s/12-14a",
    "https://soundcloud.com/rorynearly20s/various-types-of-ads",
    "https://soundcloud.com/hazerrr/peeps",
    "https://soundcloud.com/hazerrr/saga-of-orel",
    "https://soundcloud.com/hazerrr/lain",
    "https://soundcloud.com/hazerrr/bombocore",
    "https://soundcloud.com/jozzprod/i-want-to-trust",
    "https://soundcloud.com/cbrdr004/void-of-the-self",
    "https://soundcloud.com/undeaddevour/espiral-fences"
  ],
  Quran: [
     "https://soundcloud.com/azmat-ali-shah-159538358/sets/surah-mulk-sudais",
     "https://soundcloud.com/farrukh-abbas-4/surah-rehman-qari-abdul-basit",
     "https://soundcloud.com/fatimafinds/surah-al-kahf-be-heaven-omar-hisham",
     "https://soundcloud.com/muhammad-abdul-basit-979679340/surah-yasin-yaseen-full-omar"
  ]
};

let currentGenre = "lofi";
let currentIndex = 0;

const player = document.getElementById("player");
const genreSelect = document.getElementById("genre");
const nextBtn = document.getElementById("next");

function getCurrentColor() {
  return document.body.classList.contains("light-mode") ? "#A5B68D" : "#BFD8AF";
}

function playTrack(url) {
  player.style.opacity = 0;
  setTimeout(() => {
    const encoded = encodeURIComponent(url);
    const color = getCurrentColor().replace("#", "%23");
    player.src = `https://w.soundcloud.com/player/?url=${encoded}&color=${color}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false`;
    player.onload = () => player.style.opacity = 1;
  }, 150);
}


function themeToggle() {
  const isLight = document.body.classList.contains("light-mode");
  document.body.className = isLight ? "dark-mode" : "light-mode";

  const playerWindow = document.querySelector(".lightwindow, .darkwindow");
  playerWindow.className = isLight ? "darkwindow" : "lightwindow";

  playTrack(genres[currentGenre][currentIndex]);
}



function loadTrack(genre, index) {
  const tracks = genres[genre];
  if (!tracks || tracks.length === 0 || index >= tracks.length) return;
  currentGenre = genre;
  currentIndex = index;
  playTrack(tracks[index]);
}

function loadNextTrack() {
  const tracks = genres[currentGenre];
  const nextIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentGenre, nextIndex);
}



window.addEventListener("DOMContentLoaded", () => {
  loadTrack(currentGenre, currentIndex);

  genreSelect.addEventListener("change", () => {
    const selected = genreSelect.value;
    loadTrack(selected, 0); 
  });

  nextBtn.addEventListener("click", loadNextTrack);
});
