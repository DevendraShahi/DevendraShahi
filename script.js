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

$('#about').mouseover(function () {
  $('#nav_about .line').addClass('mouse_enter_line');
  $('#nav_about a').addClass('mouse_enter');
});

$('#about').mouseout(function () {
  $('#nav_about .line').removeClass('mouse_enter_line');
  $('#nav_about a').removeClass('mouse_enter');
});

$('#projects').mouseover(function () {
  $('#nav_projects .line').addClass('mouse_enter_line');
  $('#nav_projects a').addClass('mouse_enter');
});

$('#projects').mouseout(function () {
  $('#nav_projects .line').removeClass('mouse_enter_line');
  $('#nav_projects a').removeClass('mouse_enter');
});

$('#skills').mouseover(function () {
  $('#nav_skills .line').addClass('mouse_enter_line');
  $('#nav_skills a').addClass('mouse_enter');
});

$('#skills').mouseout(function () {
  $('#nav_skills .line').removeClass('mouse_enter_line');
  $('#nav_skills a').removeClass('mouse_enter');
});

