let player;
const videoWrapper = document.getElementById('videoWrapper');
const toggleBtn = document.getElementById('toggleBtn');
let isVideoVisible = true;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('wildlifeVideo', {
        videoId: 'ZdN4B_nv6Js', 
        playerVars: {
            'playsinline': 1,
            'controls': 1 
        }
    });
}

toggleBtn.addEventListener('click', () => {
    if (!player || typeof player.pauseVideo !== 'function') return; 

    if (isVideoVisible) {
        player.pauseVideo();
        videoWrapper.style.display = 'none';
        toggleBtn.textContent = 'Play Video';
        isVideoVisible = false;
    } else {
        videoWrapper.style.display = 'block';
        player.playVideo();
        toggleBtn.textContent = 'Hide Video';
        isVideoVisible = true;
    }
});