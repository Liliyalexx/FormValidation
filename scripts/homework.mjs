 document.addEventListener('DOMCOntentLoaded', () =>{
    const registrationForm = document.getElementById('registration');
    const loginForm = document.getElementById('login');
    const errorDisplay = document.getElementById('errorDisplay');

    registrationForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        const username = registrationForm.username.value;
        const email = registrationForm.email.value;
        const password = registrationForm.password.value;
        const passwordCheck = registrationForm.passwordCheck.value;
        const terms = registrationForm.terms.value;

        errorDisplay.style.display = 'none';
        errorDisplay.innerHTML = '';

        if(password !== passwordCheck){
            showError('Passwords do not match.');
            return;
        }
         // If all checks pass, you can submit the form or handle registration logic

         registrationForm.onsubmit();
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        errorDisplay.style.display = 'none';
        errorDisplay.innerHTML = '';

        loginForm.submit();
    })
    function showError(message){
        errorDisplay.style.display = 'block';
        errorDisplay.innerHTML = `<p>${message}</p>`;
    }

 } )

