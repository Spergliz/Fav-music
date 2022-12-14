let music =[]

// html elements
let musicdivE1 = document.getElementById("Music")
let musicnameE1 = document.getElementById("Songname")
let artistE1 = document.getElementById("Artist")
let lengthE1= document.getElementById("Length of song")
let btnE1= document.getElementById("btn")

btnE1.addEventListener("click", btnhandle)

function displayMusic () { let outputstr = ``;
for (let i = 0; i < music.length; i++) {
  outputstr += getmusicStr(music[i], i);
}
musicdivE1.innerHTML = outputstr;
}

function addMusic() {
music.push(newsong(musicnameE1,artistE1,lengthE1))
displayMusic(); 
} 

function btnhandle() {

}

function removehandle(){}

function newsong (Song,Artist,length){
return{ 
song: Song,
artist:Artist,
legnth: length,
}
}
function savemusic() {
    localStorage.setItem("music", JSON.stringify(music));
  }
  
  function loadcontacts() {
    let musicstr = localStorage.getItem("music");
    return JSON.parse(musicstr) ?? [];
  }
  function getmusicStr(music, i) {
    return `
    <div> 
   
    </div>
    `;
  }