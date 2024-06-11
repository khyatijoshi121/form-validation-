const form = document.getElementById("form");
const username = document.getElementById("text");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cPassword = document.getElementById("Confirm-pass");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// const phone = document.querySelector("#phone");
phone.addEventListener("keypress", (e) => {
  console.log(e);
  e.preventDefault();
  const key = e.key;
  if (!isNaN(key) && key !== " ") {
    // console.log('okkk',phone.value,key);
    phone.value += key;
  }
});

const sendData = (sRate, count) => {
  if (sRate === count) {
    alert("Registration successfull......");
    swal("Welcome!" , "Registration Succesfully.. ", "success");
    location.href = `demo.html?username=${username}`;
  }
};

// success msg
const successMsg = () => {
  let formcon = document.getElementsByClassName("form-control");
  let count = formcon.length - 1;
  for (let i = 0; i < formcon.length; i++) {
    if (formcon[i].className === "form-control success") {
      let sRate = 0 + i;
      console.log(sRate);
      sendData(sRate, count);
    } else {
      return false;
    }
  }
};

//more email validate
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }
  if (dot === emailVal.length - 1) {
    return false;
  }
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const ConfirmPassVal = cPassword.value.trim();

  //validate username
  if (usernameVal === "") {
    setErrorMsg(username, "username can not be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "username min 3 Character");
  } else {
    setSuccessMsg(username);
  }

  //validate email
  if (emailVal === "") {
    setErrorMsg(email, "email can not be blank. ");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid Email.");
  } else {
    setSuccessMsg(email);
  }

  //validate phone
  if (phoneVal === "") {
    setErrorMsg(phone, "phone Number can not be blank. ");
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, "phone number not a valid.");
  } else {
    setSuccessMsg(phone);
  }

  //validate password
  if (passwordVal === "") {
    setErrorMsg(password, "password can not be blank. ");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "password not a valid.");
  } else {
    setSuccessMsg(password);
  }

  //validate confirm password
  if (ConfirmPassVal === "") {
    setErrorMsg(cPassword, "confirm password can not be blank. ");
  } else if (passwordVal != ConfirmPassVal) {
    setErrorMsg(cPassword, "confirm password not matched.");
  } else {
    setSuccessMsg(cPassword);
  }
  successMsg();
};

const setErrorMsg = (input, errorMsg) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errorMsg;
};
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
