function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }
}
