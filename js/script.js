function uname() {
  return document.getElementById("name").value
}
function email() {
  return document.getElementById("email").value
}
function pass() {
  return document.getElementById("passWord").value
}

function loGin() {
  // console.log(uname())
  // console.log(email())
  // console.log(pass())

  if (uname().length < 3 || email() !== "admin@user .com" || pass() !== "123456") {
    Toastify({
      text: "Something Went Wrong",
      duration: 3000,
      destination: "home.html",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, red, darkred",
      },
      onClick: function () { } // Callback after click
    }).showToast();

    return;
  }
  else {
    Toastify({
      text: "You are Logined Successfully",
      duration: 3000,
      destination: "home.html",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { }
    }).showToast();
    window.location.href = "home.html";
  }
}
function showPassword(){
  // alert("Good")
  Toastify({
    text: "Password=123456",
    duration: 3000,
    destination: "home.html",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }
  }).showToast();
}

