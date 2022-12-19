let music = loadmusic();

// html elements
let musicdivE1 = document.getElementById("Music");
let musicnameE1 = document.getElementById("Songname");
let artistE1 = document.getElementById("Artist");
let lengthE1 = document.getElementById("Length of song");
let songcoverE1 = document.getElementById("song cover");
let btnE1 = document.getElementById("btn");
let removebtnE1 = document.getElementById("remove");

btnE1.addEventListener("click", addMusic);

// Display all music data on the page
function displayMusic() {
  musicdivE1.innerHTML = ""; // Clear the data
  for (let i = 0; i < music.length; i++) {
    musicdivE1.appendChild(getmusichtml(music[i], i));
  }
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
// does not rediplay once item has been removed but does remove item from array
function removehandle(e) {
  let index = +e.target.dataset.index;
  console.log(e.target);
  music.splice(index, 1);
  savemusic();
  displayMusic();
}

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
function getmusichtml(music, index) {
  let divE1 = document.createElement("div");
//DOESNT WORK 
  // let textspanE1 = document.createElement("span");
  // textspanE1.innerHTML = `
  //   Favourite  Song ${i} <br>
  //   <img src="${music.SC}"> <br>       
  //   Name of Song: ${music.song} <br>
  //    Artist: ${music.artist} <br>
  //   Length of Song: ${music.legnth} <br>
  //  `;
  // why the hell does the above not work 
  //some issue with line 64, i still dont understand it  lol 
  let textspanE1 = document.createElement("span");
  //WORKS
  textspanE1.innerHTML = `
  favourite song ${index} <br>
   Name of Song:${music.song} <br>
   Artist: ${music.artist} <br>
   Song Legnth: ${music.legnth} <br>
   ${music.SC} <br>
   `;
  let buttonE1 = document.createElement("button");
  buttonE1.innerHTML = "Remove";
  buttonE1.dataset.index = index;
  buttonE1.addEventListener("click", removehandle);

  divE1.appendChild(textspanE1);
  divE1.appendChild(buttonE1);
  return divE1;
}
//OG way of displaying user input
// function getmusicStr(music, i) {
//   return `
//     <div>
//     Favourite  Song ${i} <br>
//     <img src="${music.SC}"> <br>
//     Name of Song: ${music.song} <br>
//     Artist: ${music.artist} <br>
//     Length of Song: ${music.legnth} <br>
//     </div>
//     `;
// }
