let music = loadmusic();

// html elements
let musicdivE1 = document.getElementById("Music");
let musicnameE1 = document.getElementById("Songname");
let artistE1 = document.getElementById("Artist");
let lengthE1 = document.getElementById("Length of song");
let songcoverE1 = document.getElementById("song cover");
let btnE1 = document.getElementById("btn");

btnE1.addEventListener("click", addMusic);

function displayMusic() {
  let outputstr = ``;
  for (let i = 0; i < music.length; i++) {
    outputstr += getmusicStr(music[i], i);
  }
  musicdivE1.innerHTML = outputstr;
}

function addMusic() {
  music.push(
    newsong(
      musicnameE1.value,
      artistE1.value,
      lengthE1.value,
      songcoverE1.value
    )
  );
  displayMusic();
  savemusic();
}

function removehandle() {}

function newsong(Song, Artist, length, songcover) {
  return {
    song: Song,
    artist: Artist,
    legnth: length,
    SC: songcover,
  };
}
function savemusic() {
  localStorage.setItem("music", JSON.stringify(music));
}

function loadmusic() {
  let musicstr = localStorage.getItem("music");
  return JSON.parse(musicstr) ?? [];
}
function getmusicStr(music, i) {
  return `
    <div> 
    Favourite  Song ${i} <br>
    <img src="${music.SC}"> <br>
    Name of Song: ${music.song} <br>
    Artist: ${music.artist} <br>
    Length of Song: ${music.legnth}
    </div>
    `;
}
