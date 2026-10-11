$("#loginForm").on("submit", function(e) {
  e.preventDefault();
  let email = $("#email").val().trim();
  let password = $("#password").val().trim();

  if (email && password) {
    alert("Logged in successfully!");
  } else {
    alert("Please enter email and password.");
  }
});
