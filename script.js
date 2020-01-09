	/*form validation in the callback section*/

const inputs = document.querySelectorAll('input[data-rule]'),    
    textNameError = document.querySelector('#callback-name-error'),
    textNumberError = document.querySelector('#callback-number-error'),
    textEmailError = document.querySelector('#callback-email-error'),
    callbackForm = document.querySelector('#callback-form');

let checking;

textNameError.classList.add('valid-text');
textNumberError.classList.add('valid-text');
textEmailError.classList.add('valid-text');

for (let input of inputs) {
    input.addEventListener('blur', function(e) {
        let inputRule = this.dataset.rule,
            inputValue = this.value;

        switch (inputRule) {
            case 'name':
                checking = /^[a-zа-яA-ZА-ЯёЁ]+$/.test(inputValue);
                if (!checking) {
                    textNameError.classList.add('invalid-text');
                } else {
                    textNameError.classList.remove('invalid-text');
                    textNameError.classList.add('valid-text');
                }
                break;

            case 'number':
                checking = /^\d{11}$/.test(inputValue);
                if (!checking) {
                    textNumberError.classList.add('invalid-text');
                } else {
                    textNumberError.classList.remove('invalid-text');
                    textNumberError.classList.add('valid-text');
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

callbackForm.addEventListener('submit', e => {
    if (!checking) {
        e.preventDefault();
    }
});


/*scroll*/

const navLinks = document.querySelectorAll('.nav-link');
for(let navLink of navLinks) {
	navLink.addEventListener('click', function(e) {
		let attrValue = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(attrValue).offset().top
		}, 950)
	});
}

