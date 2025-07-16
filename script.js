const genres = {
  lofi: [
    "https://soundcloud.com/chillhopdotcom/my-steeze",
    "https://soundcloud.com/chillhopdotcom/driving-6",
    "https://soundcloud.com/chillhopdotcom/dry-leaves-ft-9ick-3",
    "https://soundcloud.com/chillhopdotcom/spykids"
  ],
  breakcore: [
    "https://soundcloud.com/rorynearly20s/12-14a",
    "https://soundcloud.com/rorynearly20s/various-types-of-ads",
    "https://soundcloud.com/tokyopill/ethereal"
  ],
  Quran: [
     "https://soundcloud.com/farrukh-abbas-4/surah-rehman-qari-abdul-basit",
     "https://soundcloud.com/azmat-ali-shah-159538358/sets/surah-mulk-sudais"
  ]
};

let currentGenre = "lofi";
let currentIndex = 0;

const player = document.getElementById("player");
const genreSelect = document.getElementById("genre");
const nextBtn = document.getElementById("next");

function playTrack(url) {
  const encoded = encodeURIComponent(url);
  const embedURL = `https://w.soundcloud.com/player/?url=${encoded}&color=%2300ffe1&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false`;
  player.src = embedURL;
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
