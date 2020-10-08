(function($){

	function playAudio(event){
		var playBtn = document.getElementById('button-sound');
		var myAudio = document.getElementById("audio");
		var isPlaying = false;
		
		$(playBtn).click(function() {
			if (isPlaying) {
				myAudio.pause();
			} else {
				myAudio.play();
			}
		});

		myAudio.onplaying = function() {
			isPlaying = true;
			$(playBtn).addClass('fa-volume-up');
			$(playBtn).removeClass('fa-volume-mute');
		};
		myAudio.onpause = function() {
			isPlaying = false;
			$(playBtn).removeClass('fa-volume-up');
			$(playBtn).addClass('fa-volume-mute');
		};
	}

	$(document).ready(function() {
		if ($('.sound-button').length) {
			playAudio();
		}
	});

})(jQuery);
