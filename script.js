let deviceWidth = document.documentElement.clientWidth;
console.log(deviceWidth);
if (deviceWidth > 768) {
  function playVideo(video_path) {
    const videoPlayerWrapper = document.querySelector(".video_player_wrapper");
    const closePlayer = document.querySelector(".close_player");
    const player = new Plyr("#player");
    // controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    const video = document.getElementById("player");
    video.src = video_path;

    video.addEventListener("loadedmetadata", () => {
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      if (videoWidth < 1500) {
        video.style.height = "500px";
      } else {
        video.style.height = "auto";
      }
    });
    videoPlayerWrapper.style.display = "flex";
    player.play();
    closePlayer.addEventListener("click", () => {
      player.stop();
      videoPlayerWrapper.style.display = "none";
    });
  }
} else {
  function playVideo(video_path) {
    const project = event.currentTarget;
    // console.log(project);
    const videoElement = document.createElement("video");
    videoElement.setAttribute("id", "player");
    videoElement.setAttribute("src", video_path);
    videoElement.setAttribute("autoplay", true);
    videoElement.setAttribute("controls", true);
    const projectThumbnail = project.querySelector(".project-thumbnail");
    projectThumbnail.innerHTML = "";
    projectThumbnail.appendChild(videoElement);
  }
}
