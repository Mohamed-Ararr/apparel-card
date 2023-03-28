window.onload = function () {
  let email = document.querySelector("input[type='email']");
  let submitButton = document.querySelector("button");
  let emailRegExp = /\w+@\w+.(com|org|fr)/gi;
  let errorIcon = document.querySelector(".on-error img");
  let errorText = document.querySelector(".error-text");

  errorText.style.display = "none";
  errorIcon.style.display = "none";

  submitButton.onclick = function (e) {
    e.preventDefault();
    if (emailRegExp.test(email.value)) {
      console.log(email.value);
      console.log("Operation Ended Successfully");
      email.value = "";
      errorText.style.display = "none";
      errorIcon.style.display = "none";
    } else {
      errorIcon.style.display = "block";
      errorText.style.display = "block";
      console.log(errorIcon);
      console.log("Error! Invalid Email");
    }
  };
};
