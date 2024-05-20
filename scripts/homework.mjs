 //part 1
 
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
  
        if(username.length < 3){
            showError("Username must be more then 3 characters long.", registrationForm.username);
            return
        }

        // Validate email format (HTML5 email input does this automatically)

        if(!validateEmail(email)){
            showError('Please enter a valid email address.', registrationForm.email);
        }

         // Validate terms checkbox
         if(!terms){
            showError('You must agree to the Terms of Use.', registrationForm.terms)
         }
         // If all checks pass, you can submit the form or handle registration logic
         alert('Form submitted successfully');
         registrationForm.submit();
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
        element.focus();
    }
    function validateUsername(username){
        if(username.length ===0){
            showError('Username cannot be blank.', registrationForm.username);
            return;
        }
        if(username.length < 4){
            showError('Username must be at least 4 characters.', registrationForm.username);
            return false;
        }
        const uniqueChars = new Set(username){
            if(uniqueChars.size < 2){
                showError('Usernaem must contain at least two unique character', registrationForm.username);
                return false;
            }
            if(/[^a-zA-Z0-9]/.test(username)){
                showError('Username cannot contain any special characters or space', registrationForm.username);
            }

        }

    }

 } )

