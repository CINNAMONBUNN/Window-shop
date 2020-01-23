	/*form validation*/

	const inputs = document.querySelectorAll('input[data-rule]'),
	    textNameError = document.querySelectorAll('.name-error'),
	    textNumberError = document.querySelectorAll('.number-error'),
	    textEmailError = document.querySelector('.email-error'),
	    callbackForm = document.querySelector('#callback-form'),
	    consultationForm = document.querySelector('#consultation-form');

	let checking;

	for (let i = 0; i < 2; i++) {
	    textNameError[i].classList.add('valid-text');
	    textNumberError[i].classList.add('valid-text');


	    textEmailError.classList.add('valid-text');


	    for (let input of inputs) {
	        input.addEventListener('blur', function(e) {
	            let inputRule = this.dataset.rule,
	                inputValue = this.value;

	            switch (inputRule) {
	                case 'name':
	                    checking = /^[a-zа-яA-ZА-ЯёЁ]+$/.test(inputValue);
	                    if (!checking) {
	                        textNameError[i].classList.add('invalid-text');
	                    } else {
	                        textNameError[i].classList.remove('invalid-text');
	                        textNameError[i].classList.add('valid-text');
	                    }
	                    break;

	                case 'number':
	                    checking = /^\d{11}$/.test(inputValue);
	                    if (!checking) {
	                        textNumberError[i].classList.add('invalid-text');
	                    } else {
	                        textNumberError[i].classList.remove('invalid-text');
	                        textNumberError[i].classList.add('valid-text');
	                    }
	                    break;

	                case 'email':
	                    checking = /^\S+?@\S+$/.test(inputValue);
	                    if (!checking) {
	                        textEmailError.classList.add('invalid-text');
	                    } else {
	                        textEmailError.classList.remove('invalid-text');
	                        textEmailError.classList.add('valid-text');
	                    }
	                    break;
	            }

	            if (checking) {
	                this.classList.add('valid');
	                this.classList.remove('invalid');
	            } else {
	                this.classList.add('invalid');
	            }
	        });
	    }
	}
	callbackForm.addEventListener('submit', e => {
	    if (!checking) {
	        e.preventDefault();
	    }
	});

	consultationForm.addEventListener('submit', e => {
	    if (!checking) {
	        e.preventDefault();
	    }
	});


	/*scroll*/

	const navLinks = document.querySelectorAll('.nav-link');
	for (let navLink of navLinks) {
	    navLink.addEventListener('click', function(e) {
	        e.preventDefault();
	        let attrValue = $(this).attr('href');
	        $('html,body').animate({
	            scrollTop: $(attrValue).offset().top
	        }, 950)
	    });
	}