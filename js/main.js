
$(function () {
	var people = ["Omar Choudhary", "Eserophe Ovie-Okoro", "Robel Ghebrihiwet", "Bibi Sanjarani", "Ryan Chapman", "Max Rasmusen", "Tina Gohli", "Ikenna Obichukwu", "Ricky Liu", "Nneji Nwakamma"]


// Your task is to use your new awesome jQuery skills to dynamically manipulate the DOM. You MUST use appropriate jQuery methods and selectors to complete the task.


// 1. Include a copy of jQuery in index.html via CDN.

// 2. Create a function to create a new "card" li element and append it to the "people" list.
	$("ul").append($("<li>New list item</li>"));
	$($("li")[2]).addClass("card");

// 3. From the data in the people array, append a new card for each person.



	for (var i = 0; i < people.length; i++) {
		$("ul").append($("<li>"+people[i]+"</li>"));
		$("li").addClass("card");
		
	}





// ** Bonus ** 

// 1. Attach an event listener to each card that will toggle the background colour from red to green.
	// $(".card").css("background-color", "green");
	
	$(".card").click(function (event) {
		event.preventDefault();
		$(event.target).toggleClass('green');

	})




// 2. Add a time delay of 2 seconds between each new card being appended.

	

});