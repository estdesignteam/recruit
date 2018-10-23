var player

$(document).ready(function(){

	$(".close").click(function(){
		$(".popup,.video_pop").hide();
		if (player != undefined) {
			player.pause()
		}
	})

	$(".video_list a").click(function() {
		if ($(this).next(".video_pop").is(":hidden")) {
		    player = new Vimeo.Player($($(this).next(".video_pop")[0]).find(".playerControl")[0]);
		    player.setCurrentTime(0);
		    player.pause();
			$(this).next(".video_pop").show()

		}
	})
});