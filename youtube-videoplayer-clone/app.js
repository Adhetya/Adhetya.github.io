const playPauseBtn = document.querySelector(".play-pause-btn")
const theatreBtn = document.querySelector(".theatre-btn")
const fullScreenBtn = document.querySelector(".fullScreen-btn")
const video = document.querySelector("video")
const videoContainer = document.querySelector(".video-container")


//Play/pause video on clicking k or spacebar in keyboard
document.addEventListener("keydown", e =>{
    switch(e.key.toLowerCase()){
        case " ":
        case "k":
            togglePlay()
            break
    }
})
playPauseBtn.addEventListener('click', togglePlay)//Play/pause video on clicking button
video.addEventListener('click', togglePlay)//Play/pause video on clicking video 
function togglePlay() {
    video.paused ? video.play() : video.pause()
}
//Remove pause icon when playing video
video.addEventListener("play", () =>{
    videoContainer.classList.remove("paused")
})
//Add pause icon when video is paused
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
})