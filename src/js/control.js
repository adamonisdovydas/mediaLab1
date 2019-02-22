var player1 = document.getElementById("my_video_1");
var player2 = document.getElementById("my_video_2");
function Play() {
	player1.play();
}
function Pause() {
	player1.pause();
}
function Stop() {
	player1.pause();
	player1.currentTime(0);
}
function Forward() {
	var tmp = player1.currentTime();
	player1.currentTime(tmp+5);
}
function Backward() {
	var tmp = player1.currentTime();
        player1.currentTime(tmp-5);
}
function Load(id) {
	if (id==="btn1") {
		player1 = videojs('my_video_1');
		var name = ["Play", "Pause", "Stop", "Forwards", "Backwards"];
		var action = [
				function(){Play()},
				function(){Pause()},
				function(){Stop()}, 
				function(){Forward()}, 
				function(){Backward()}
		];
		for (i=0; i<5; i++){
			var button = document.createElement("button");
			button.onclick=action[i];
			button.innerHTML = name[i];
			var buttonDiv = document.getElementById("buttons");
			buttonDiv.appendChild(button);
		}
	}
	else if (id==="btn2") player2 = videojs('my_video_2');
}
