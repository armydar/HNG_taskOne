let form = document.querySelector("#formFields");
let errorDiv = document.querySelector(".errors");
form.addEventListener("submit", e => {
  let message = "";
  e.preventDefault();
  let formFields = Array.prototype.slice
    .call(e.target)
    .filter(
      a =>
        a.nodeName.toLowerCase() === "input" ||
        a.nodeName.toLowerCase() === "textarea"
    );

  for (let i = 0; i < formFields.length; i++) {
    if (!formFields[i].value) {
      message += formFields[i].name + " cannot be empty <br />";
    } else if (formFields[i].name === "name") {
      if (formFields[i].value.length < 4) {
        message += "Name must be atleast 4 characters long <br/>";
      }
    } else if (formFields[i].name === "message") {
      if (formFields[i].value.length < 20) {
        message += "Message must be atleast 20 characters long";
      }
    }
    if (message) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = message;
    }
  }
});
