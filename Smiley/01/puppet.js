/********************************************************************
* This page animates a Smiley Face on a green screen.
* The face & eyes are 2 separate images so they can move independently.
********************************************************************/

// Global Variables
var screen_height = 1080; //Assuming 1080p for now
var screen_width = 1920;
var center_x = screen_width / 2; //Halfway Point horizontally
var center_y = screen_height / 2; //Halfway Point vertically
var max_move_x = 250; //How far eyes can move horizontally from center
var max_move_y = 125; //How far eyes can move vertically from center

// Event Listener to handle Mouse Movement
window.addEventListener("mousemove", movePuppet);

/*********************************************************************
* Get Mouse Position. Move Puppet Accordingly.
* @param e: Event object JS made for us that has Mouse Data
*********************************************************************/
function movePuppet(e) {
  var x = e.clientX; //Current Mouse X Position (horizontal)
  var y = e.clientY; //Current Mouse Y Position (vertical)
  
  // Percent Off Center (-1 = 100% left, 0 = middle, +1 = 100% right)
  var percent_x = (x - center_x) / center_x; //horizontal percent
  var percent_y = (y - center_y) / center_y; //vertical percent

  // Calculate Eye Movement as Percent of Max Allowed Movement
  var move_x = percent_x * max_move_x;
  var move_y = percent_y * max_move_y;

  // Apply Movement to Browser (the DOM: Document Object Model)
  var eyes = document.getElementById("eyes");
  eyes.style.left = move_x; //Alter CSS Styling for #eyes
  eyes.style.top = move_y;
}