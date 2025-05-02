// The golden ratio, the most irrational number,
// used to make a wide range of colours with no repetition
const phi = (1+Math.sqrt(5))/2;

// Using a parameter t, get an rgb colour as a list of 3 ints in the range [0..255]
function rgb(t) {
	return (
		// g has phi times the frequency of r, b has phi times the frequency of g
		[t, phi * t, phi * phi * t]
		// smooth interpolation between -1 and 1
		.map(Math.sin)
		// Force into the range 0 to 256
		.map(x => 128 * (x + 1))
		// Round down to integers from 0 to 255
		.map(Math.floor)
	);
}

// Get the elements from the document
const bodyele = document.getElementById("body");
const rele = document.getElementById("rbar");
const gele = document.getElementById("gbar");
const bele = document.getElementById("bbar");

// Using the parameter, update the screen
function draw(t) {
	// Get the colours
	var [r,g,b] = rgb(t);
	// Update the background colour
	bodyele.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	// Set the bar heights, in the range from 0 to 70 pixels
	rele.style.height = (r / 256 * 70) + "px";
	gele.style.height = (g / 256 * 70) + "px";
	bele.style.height = (b / 256 * 70) + "px";
}

// Parameter that will change over time
var t = 0.0;

// How fast the parameter should change each frame
const inc = 0.01;

// Use requestAnimationFrame to loop without clogging the cpu
function loop() {
	requestAnimationFrame(() => {
		// Draw screen
		draw(t);
		// Increment parameter
		t += inc;
		// Repeat
		loop();
	});
}
// Start
loop();

// Tell curious people where to view the source code
console.log("Source code is at https://github.com/olligobber/rgbvis for easy viewing");