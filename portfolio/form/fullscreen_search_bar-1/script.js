let search = document.body.querySelector('.search');
let icon = document.body.querySelector('.icon');


icon.addEventListener("click", function() {
	search.classList.toggle('active');
	
	if (search.classList.contains('active')) {
		icon.classList.remove('fa-search');
		icon.classList.add('fa-times');
	} else {
		icon.classList.remove('fa-times');
		icon.classList.add('fa-search');
	}
});