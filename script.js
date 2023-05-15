function embedAudioVideo() {
    var url = document.getElementById("audio-video-url").value;
    
    if (url.endsWith(".mp3") || url.endsWith(".wav")) {
      var audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      document.getElementById("audio-video-container").appendChild(audio);
    } else if (url.endsWith(".mp4") || url.endsWith(".avi")) {
      var video = document.createElement("video");
      video.src = url;
      video.controls = true;
      document.getElementById("audio-video-container").appendChild(video);
    } else {
      alert("Invalid audio/video URL");
    }
  }
  