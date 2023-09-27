const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
let isPlaying = true;
playBtn.addEventListener("click",playPause);

function playPause(){
    if(isPlaying)
    {
        song.play();
        isPlaying=false;
        playBtn.innerHTML=`<i class="fa-solid fa-pause"></i>`;
        timer =setInterval(displayTimer,500);
    }
    else{
        song.pause();
        isPlaying=true;
        playBtn.innerHTML=`<i class="fa-solid fa-play " ></i>`
        clearInterval(timer);
    }
}


const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");

displayTimer();
let timer = setInterval(displayTimer,500);
function displayTimer()
{
    const{duration, currentTime} =song;
    rangeBar.max = duration;
    rangeBar.value=currentTime;
    remainingTime.textContent=formatTimer(currentTime);
    if(!duration)
    {
        durationTime.textContent="00:00";
    }
    else
    {
        durationTime.textContent=formatTimer(duration);
    }
    
}
function formatTimer(number)
{
    const minutes = Math.floor(number/60);
    const seconds = Math.floor(number - minutes*60);
    return `${minutes}:${seconds}`;
}



rangeBar.addEventListener("change",handleChangeBar);

function handleChangeBar()
{
    song.currentTime = rangeBar.value ;
}

