export const setVolume = () => {
    const video = document.getElementById("champion-detail-abilities-video");
    video.volume = 0.3;
    video.addEventListener('mouseenter', function () { this.muted = false });
    video.addEventListener('mouseleave', function () { this.muted = true });
}