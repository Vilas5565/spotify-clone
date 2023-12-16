console.log("welcome to spotify");
let songIndex = 0;
let audioElement=new Audio('song/1.mp3');
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let songitems=Array.from(document.getElementsByClassName("songitem"));
let mastersongname=document.getElementById("mastersongname")
let gif=document.getElementById("gif");

let songs=[
    {songname:"Dum masala",filepath:"song/1.mp3",coverpath:"covers/nenu nuvvantu.jpeg"},
    {songname:"nenu nuvvantu",filepath:"song/2.mp3",coverpath:"covers/nenu nuvvantu.jpeg"},
    {songname:"olaolala",filepath:"song/3.mp3",coverpath:"covers/kk.jpeg"},
    {songname:"kolavari di",filepath:"song/4.mp3",coverpath:"covers/kolavari di.jpeg"},
    {songname:"gabbar singh",filepath:"song/5.mp3",coverpath:"covers/gabbar.jpeg"},
    {songname:"chaleya",filepath:"song/1.mp3",coverpath:"covers/kk.jpeg"},
    {songname:"bones",filepath:"song/7",coverpath:"covers/bones.jpg"},
    {songname:"lover",filepath:"song/6",coverpath:"covers/lover1.jpg"},
]
songitems.forEach((element ,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});
audioElement.addEventListener('timeupdate', () => {
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myprogressbar.value=progress;
});
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
const makeallplays= () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
    }
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=8){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById("prev").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
        
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})