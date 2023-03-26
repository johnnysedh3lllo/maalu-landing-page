const emailSubmit = document.querySelector(".input__field");
const emailInput = document.querySelector(".email-input");

let getEmailInput;

//get the on change properties for the input field
emailInput.addEventListener("input", (e) => {
  getEmailInput = emailInput.value;
});

// handle email submitted
emailSubmit.addEventListener("submit", async (e) => {
  //prevent default window reload when the submit button is clicked
  e.preventDefault();
  // get the right email format using regex
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // test the email input if it is correct
  if (emailRegex.test(getEmailInput) === false) {
    let wrongEmail = document.querySelector(".wrong-email");
    // if it is incorrect send a error message to the user
    setTimeout(() => {
      wrongEmail.style.display = "block";
      setTimeout(() => {
        wrongEmail.style.display = "none";
      }, 6000);
    }, 1000);
    return;
  }

  // empty the email input field on clicking the submit button
  emailInput.value = "";
  let email = getEmailInput;

  // send a post request to the server using ajax
  var req = new XMLHttpRequest();
  req.open("POST", "http://localhost:5500/email/subscribe", true);
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify({ email: getEmailInput }));
  req.onreadystatechange = () => {
    if (req.readyState === req.DONE) {
      const successEmail = document.querySelector(".success-email");
      const emailExist = document.querySelector(".email-exist");
      let res = JSON.parse(req.responseText);
      console.log("ghut", res);
      if (res.message) {
        setTimeout(() => {
          emailExist.style.display = "block";
          setTimeout(() => {
            emailExist.style.display = "none";
          }, 5000);
        }, 500);
        console.log(JSON.parse(res.message));
      }

      if (res.emailUser) {
        setTimeout(() => {
          successEmail.style.display = "block";
          setTimeout(() => {
            successEmail.style.display = "none";
          }, 5000);
        }, 500);

        // console log the response
        console.log(JSON.parse(res.emailUser));
      }
    }
  };
});
