const yess = document.querySelector('.yess');
const no = document.querySelector('.No');
const message = document.querySelector('.theme-message');
const video = document.querySelector('.kiss');
const buttonHeight = 50;
const buttonWidth = 150;

const maxwidth = window.innerWidth - buttonWidth;
const maxheight = window.innerHeight - buttonHeight;

yess.addEventListener('click',()=>{
  message.innerHTML = 'I love you too!!!Forever and ever';
  message.style.color = 'black';
  video.classList.add("show-video");
    
    // 2. Start playing the video
    // The play() method returns a Promise which can be used for error handling
    video.play().catch(error => {
        console.error("Video playback failed:", error);
    });

    // Optional: Hide the button after the video starts playing
    yess.style.display = "none";
});

no.addEventListener('mouseover',()=>{
  
  no.style.left = Math.floor(Math.random()*(maxwidth+1))+'px';
  no.style.top = Math.floor(Math.random()*(maxheight+1))+'px';

  no.style.position = 'absolute';
});