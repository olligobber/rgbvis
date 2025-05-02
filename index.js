const phi = (1+Math.sqrt(5))/2;

function rgb(t) {
	return (
		[t, phi * t, phi * phi * t]
		.map(Math.sin)
		.map(x => 128 * (x + 1))
		.map(Math.floor)
	);
}

const bodyele = document.getElementById("body");
const rele = document.getElementById("rbar");
const gele = document.getElementById("gbar");
const bele = document.getElementById("bbar");

function draw(t) {
	var [r,g,b] = rgb(t);
	bodyele.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	rele.style.height = (r / 256 * 70) + "px";
	gele.style.height = (g / 256 * 70) + "px";
	bele.style.height = (b / 256 * 70) + "px";
}

var t = 0.0;
const inc = 0.01;
function loop() {
	requestAnimationFrame(() => {
		draw(t);
		t += inc;
		loop();
	});
}
loop();
console.log("Source code is at https://github.com/olligobber/rgbvis for easy viewing");