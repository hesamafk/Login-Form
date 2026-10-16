const form = document.querySelector('#loginForm');
const password = document.querySelector('#password');
const visibilityButton = document.querySelector('#show-password');
const status = document.querySelector('#form-status');

visibilityButton.addEventListener('click', () => {
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  visibilityButton.textContent = visible ? 'Hide' : 'Show';
  visibilityButton.setAttribute('aria-pressed', String(visible));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.textContent = 'Form checked. An authentication server is needed to sign in.';
});
form.addEventListener('input', () => { status.textContent = ''; });
