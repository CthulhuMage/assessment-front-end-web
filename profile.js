function handleColor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is #064d65');
}
function handlePlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is the island of Kauai, Hawaii');
}
function handleRitual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is drinking a cup of coffee or tea outside with my puppy before the day starts');
}

let color = document.querySelector('#color');
color.addEventListener('click', handleColor);

let place = document.querySelector('#place');
place.addEventListener('click', handlePlace);

let ritual = document.querySelector('#ritual');
ritual.addEventListener('click', handleRitual);