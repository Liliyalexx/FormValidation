const myForm = document.getElementById("myForm").addEventListener('click', handleSubmit);
const input = document.getElementById('inputOne');

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert(`You submitted: 
//   ${myForm.querySelector("input").value}`);
// });

function handleSubmit(e){
    e.preventDefault();
    console.log({input:value,
//     input.value = ` `;
//     alert(`You submitted: 
// //   ${myForm.querySelector("input").value}`);
username: nameInput.value,
age: age.value,

});
}


myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});
const form = document.getElementById("form");
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const password = form.elements["password"];
//EventListeners
email.addEventListener("change", () => {});
console.log("you change");

//helper function
function validateEmail() {
  let eml = email.value;

  let actVal = eml.indexOf("@");

  let dotVal = eml.lastIndeexOf(".");

  console.log("index VAlues", atVal, dotVal);

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }

  evt.returnValue = true;
  return emailVal;
}

form.addEventListener("submit", validateEmail);
