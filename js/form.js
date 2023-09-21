$(".navbar-menu-btn").click(function () {
  $(this).toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
  if ($(".navbar-menu").hasClass("is-active")) {
    $(".navbar-menu").animate({
      left: "0px",
    });
  } else {
    $(".navbar-menu").animate({
      left: "-100%",
    });
  }
});

$(document).ready(function () {
  $("#checkboxInput").change(function () {
    if ($(this).is(":checked")) {
      // Show the register form
      $(".register-box").css("display", "block");
      $(".login-box").css("display", "none");
    } else {
      // Show the login form
      $(".register-box").css("display", "none");
      $(".login-box").css("display", "block");
    }
  });
});

var user = {
  username: "",
  email: "",
  password: "",
};

function login() {
  user.email = $("#email-login").val();
  user.password = $("#password-login").val();
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8800/api/auth/login",
    data: JSON.stringify(user),
    success: function (data) {
      console.log(data);
      if (data == "success") {
        alert("Login successfully");
        window.location.href = "/index.html";
      }
    },
  }).fail(function () {
    alert("Login failed");
  });
}

function register() {
  user.username = $("#username").val();
  user.email = $("#email").val();
  user.password = $("#password").val();
  if (user.password != $("#repeat-password").val()) {
    alert("Password and repeat password are not the same");
    return;
  }
  localStorage.setItem("user", JSON.stringify(user));
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8800/api/auth/register",
    data: JSON.stringify(user),
    success: function (data) {
      console.log(data);
      if (data == "success") {
        alert("Register successfully");
        window.location.href = "/courses.html";
        return;
      }
    },
  }).fail(function () {
    alert("Register failed");
  });
}

$("#register-btn").click(function () {
  register();
});

$("#login-btn").click(function () {
  login();
});
