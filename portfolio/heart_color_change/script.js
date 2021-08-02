const changeBtn = document.getElementById('change');
const toggleBtn = document.getElementById('toggle');
const heart = document.querySelector('.heart');
const autoBtn = document.getElementById('auto');


function randomColor() {
	return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

function newColor() {
		colorSet = randomColor();
		heart.style.backgroundColor = colorSet;
		heart.style.color = colorSet;
}

function resetColor() {
		heart.style.backgroundColor = "#0f0f0f";
		heart.style.color = "#0f0f0f";
}


// ON/Off button click
toggleBtn.addEventListener('click', function() {
	if ( !heart.classList.contains('active')) {
		heart.classList.add('active');
		
		newColor();
		
		if( autoBtn.checked ) {
			autoChange = setInterval(function() {
				newColor();				
			}, 1000);	
		}
	} else {
		heart.classList.remove('active');
		
		resetColor();
	
		clearInterval(autoChange);
	}
});

// Color change button
changeBtn.addEventListener('click', function() {
	if (!heart.classList.contains('active')) {
		return false;
	} else {
		if( autoBtn.checked ) {
			clearInterval(autoChange);
			
			newColor();
			
			autoChange = setInterval(function() {
				
				newColor();
				
			}, 1000);	
		} else {
			
			newColor();
		}		
	}
});

let autoChange;

// Auto button activate;
autoBtn.addEventListener('change', function() {
	if (this.checked && heart.classList.contains('active')) {
				
		autoChange = setInterval(function() {
			
			newColor();
			
		}, 1000);		
	} else {
		clearInterval(autoChange);
	}
})























