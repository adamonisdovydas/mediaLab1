var player = document.getElementById("my_video_1");
function Play() {
	player.play();
}
function Pause() {
	player.pause();
}
function Load() {
	var tmp = document.getElementById("myText").value;
	//document.getElementById("myText").value="";
	player.pause();
	document.getElementById("myVideo").src=tmp;
	//player.load();
	//player.dispose();
}
