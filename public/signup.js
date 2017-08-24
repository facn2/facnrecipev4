document.querySelector('.form').addEventListener('input', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('usernameinput').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const validation = document.getElementById('validation');

  if (name.length !== 0 && name.length < 2) {
    validation.innerText='Please enter your name.';
  } else if (surname.length !== 0 && surname.length < 2) {
    validation.innerText='Please enter your surname.';
  } else if (email.length !== 0 && email.length < 4) {
    validation.innerText='Please enter your email.';
  } else if (email.length !== 0 && !email.match(/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})/i)) {
    validation.innerText='Please enter a valid email.';
  } else if (username.length !== 0 && username.length < 6) {
    validation.innerText='Please enter your username.';
  } else if (password.length !== 0 && password.length < 8) {
    validation.innerText='Please enter a password. Your password should contain at least 8 letters.'
  } else if (confirm.length !== 0 && confirm.length < 8) {
    validation.innerText='Please enter a confirmation password. This should match your password.'
  } else if (password !== confirm) {
    validation.innerText='Passwords don\'t match';
  } else {
    validation.innerText='';
  }
});
