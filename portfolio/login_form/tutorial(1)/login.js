let email = document.body.querySelector("#email");
let pw = document.body.querySelector("#pw");
let btn = document.body.querySelector("#btn");
let emailLabel = email.nextElementSibling;
let pwLabel = pw.nextElementSibling;

btn.addEventListener("click", function () {
	if (!email.value) {
		emailLabel.classList.add('warning');
		setTimeout(function () {
			emailLabel.classList.remove('warning');
		}, 1500);
	} else if (!pw.value){
		pwLabel.classList.add('warning');
		setTimeout(function () {
			pwLabel.classList.remove('warning');
		}, 1500);
	}
});



//input에 focus하면 label이 올라가고, focus 해제하면 빈 값인지 체크해서 원상복귀
email.addEventListener("focus", function() {
	emailLabel.classList.add('active');	
});

email.addEventListener("blur", function() {
	if ( !email.value ) {
		console.log("aa");
		emailLabel.classList.remove('active');
	} else {
		emailLabel.classList.add('active');	
	}
});

pw.addEventListener("focus", function() {
	pwLabel.classList.add('active');	
});

pw.addEventListener("blur", function() {
	if ( !pw.value ) {
		pwLabel.classList.remove('active');
	};
});
