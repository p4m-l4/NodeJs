const userName = document.registration.username;
const email = document.registration.email;
const phone = document.registration.phonenumber;
const country = document.registration.country;
const gender = document.registration.gender;
const engLang = document.registration.english;
const lugLang = document.registration.luganda;
const form = document.registration.signup;

const min = 3;
const max = 25;

// alphabet =/^[A-Za-z]+$/
// numbers =/^[0-9]+$/
// email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const checkPhone = () => {
	let alphabet = /^[A-Za-z]+$/;
	// check if phone is empty
	if (phone.value === "") {
		phone.style.border = "3px solid red";
		phone.focus();
	}

	// check for numbers
	if (phone.value.match(alphabet)) {
		phone.style.border = "3px solid red";
	} else {
		emailEl.focus();
	}
};

// check email
const checkEmail = () => {
	let emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/;
	// check if phone is empty
	if (email.value === "") {
		email.style.border = "3px solid red";
		email.focus();
	}

	// check for numbers
	if (email.value.match(emailreg)) {
		country.focus();
	} else {
		email.style.border = "3px solid red";
		email.focus();
	}
};
