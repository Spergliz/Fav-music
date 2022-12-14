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
  outputstr += getMusicStr(music[i], i);
}
musicdivE1.innerHTML = outputstr;
}

function addMusic() {
    
} 

function btnhandle() {

}

function removehandle(){}

function newsong (){

}