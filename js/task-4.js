'use strict';
const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // Select email and password value
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  //Alternative methods for select email and password value
  // const listener = new FormData(registerForm);
  // const email = listener.get('email').trim();
  // const password = listener.get('password').trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const inputs = {
    email: email,
    password: password,
  };

  console.log(inputs);

  event.target.reset();
}
