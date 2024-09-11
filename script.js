console.log("Hello Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/love1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

// Fix this line to get elements by class, not by ID
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
   
  { songName: "Let me Love you", filePath: "songs/love0.mp3", coverPath: "covers/album1.jpg" },
  { songName: "Tere Naina",      filePath: "songs/love1.mp3", coverPath: "covers/album2.jpg" },
  { songName: "Millioniare",     filePath: "songs/love2.mp3", coverPath: "covers/album3.jpg" },
  { songName: "Chedkaaniyan",    filePath: "songs/love3.mp3", coverPath: "covers/album4.jpg" },
];

// To Handle the diff.. songName and Its Images
songItems.forEach((ele, ind) => {
  ele.getElementsByTagName("img")[0].src=songs[ind].coverPath;
  ele.getElementsByClassName("songName")[0].innerText=songs[ind].songName
});


// Handle play/pause button
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime === 0) {
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
  }
});

// Handle seekbar
audioElement.addEventListener('timeupdate', () => {
  // Update progress bar as the song plays
  myProgressBar.value  = parseInt((audioElement.currentTime / audioElement.duration) * 100);

 
});

myProgressBar.addEventListener('input', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele) => {
    ele.classList.remove('fa-pause');
    ele.classList.add('fa-play');
  });
};


let songitemPlay=Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele)=>{
   ele.addEventListener('click',(e)=>{

          makeAllPlays();
      e.target.classList.remove('fa-play')
      e.target.classList.add('fa-pause')
         let songIndex= parseInt(e.target.id); 
          audioElement.src=`songs/love${songIndex}.mp3`
          masterSongName.innerText=songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
         audioElement.currentTime=0;
         masterPlay.classList.remove('fa-play');
         masterPlay.classList.add('fa-pause');
        
             

   })
})


   document.getElementById('next').addEventListener('click',()=>{
       if(songIndex==3){
          songIndex=0;
       }else{
         songIndex+=1;
       }
       audioElement.src=`songs/love${songIndex}.mp3`
        masterSongName.innerText=songs[songIndex].songName;
       
         audioElement.play();
         audioElement.currentTime=0;
       masterPlay.classList.remove('fa-play');
         masterPlay.classList.add('fa-pause');
   })
   document.getElementById('previous').addEventListener('click',()=>{
       if(songIndex==0){
          songIndex=3;
       }else{
         songIndex-=1;
       }
       audioElement.src=`songs/love${songIndex}.mp3`
       masterSongName.innerText=songs[songIndex].songName;
        
         audioElement.play();
         audioElement.currentTime=0;
         masterPlay.classList.remove('fa-play');
         masterPlay.classList.add('fa-pause');
   })

   