let music =[]

// html elements
let musicnameE1 = document.getElementById("Songname")
let artistE1 = document.getElementById("Artist")
let lengthE1= document.getElementById("Length of song")
let btnE1= document.getElementById("btn")

btnE1.addEventListener("click", btnhandle)

function displayMusic () { let outputstr = ``;
for (let i = 0; i < music.length; i++) {
  outputstr += getContactStr(music[i], i);
}
contactsE1.innerHTML = outputstr;
}

function addMusic() {} 

function btnhandle() {
    
}

function removehandle(){}

function newsong (){}