console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your Form has been submitted');
}
function waiting(evt) {
	evt.preventDefault();

	alert('Hey Sexy ;)')
}



let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#snake');
img.addEventListener('mouseover', waiting)