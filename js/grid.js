
$(document).ready(function() {

	//initialize grid variables
	var horizontalDivs;
	var verticalDivs;

	//onload generate 16x16 grid by default
	horizontalDivs = 16;
	verticalDivs = 16;

	for (var verticalCount = verticalDivs; verticalCount > 0; verticalCount--) {

		$("#theGrid").append("<div class=\"row\"></div>");

	}

	for (var horizontalCount = horizontalDivs; horizontalCount > 0; horizontalCount--) {

		$(".row").append("<div class=\"square\"></div>");

	}

	//create new grid
	$('#gridButton').on("click", function() {

		$(".row").remove();

		var newHorizontal = prompt("How many squares horizontal? Maximum: 50");
		var newVertical = prompt("How many squares vertically? Maximum: 50");

		//validating input are numbers
		if(!isNaN(newHorizontal) && !isNaN(newVertical)) {

			//checking if vertical input is too large
			if (newVertical <= 50) {

				for (var verticalCount = newVertical; verticalCount > 0; verticalCount--) {
					
					$("#theGrid").append("<div class=\"row\"></div>");

				}

			} else {

				alert("You entered too large of a vertical number!");

			}

			//checking if horizontal input is too large
			if (newHorizontal <= 50) {

				for (var horizontalCount = newHorizontal; horizontalCount > 0; horizontalCount--) {

					$(".row").append("<div class=\"square\"></div>");

				}

			} else {

				alert("You entered too large of a horizontal number!");

			}

		} else {

			alert("Your input was invalid.");

		}

	});

	//colour picker controls
	var selectedColour;

	$('.exampleColour').on("click", function() {

		selectedColour = $(this).css("background-color");

		$('#colourDisplay').css("background-color", selectedColour);

		return selectedColour;

	});

	//on click colour the grid
	$(".square").on("click", function() {

		$(this).css("background-color", selectedColour);

	});

});