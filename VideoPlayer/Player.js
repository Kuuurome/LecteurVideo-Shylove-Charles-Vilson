var video = document.querySelector('#myVid');

var button = document.querySelector('#playBtn');

var currentTime = document.querySelector('#currenTime');

var volumeSlider = document.querySelector('#volume');


button.addEventListener('click', function() {
    
    if (video.paused) {
      video.play();
      $("#playBtn").attr("src","./elements/pause_33px.png");
    } else {
      video.pause();
      $("#playBtn").attr("src","./elements/play_33px.png");
    }
  });

  video.addEventListener('timeupdate',function(){
    
    var position = video.currentTime / video.duration;
        
    fill.style.width = position * 100 +'%';
    
    if(video.ended){
        $("#playBtn").attr("src","./elements/play_33px.png");
    }
});
  function changeSound(){
    
    video.volume = volumeSlider.value;
    
    if(volumeSlider.value == 0){
        
        $("#speaker").attr("src","./elements/mute_33px.png");
    }
    else{
        $("#speaker").attr("src","./elements/volume_33px.png");
    }
}



 
   

  
  


 
 
 
 
  
