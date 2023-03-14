const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsg = document.querySelector(".errorMsg");
const form = document.querySelector("form");

const user = { email: "idir@idir", password: "idir" };

let error = "Veuillez rentrer au minimum 1 caractère";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.length <= 0 || password.value.length <= 0) {
    errorMsg.textContent = error;
    errorMsg.style.color = "red";
    errorMsg.style.margin = "1rem 0";
    return (errorMsg.innerHTML =
      "Les champs doivent être remplis et contenir au moin un caractère");
  } else if (email.value === user.email && password.value === user.password) {
    alert("Vous ete connectée en tant que " + user.email);
  } else {
    errorMsg.style.color = "red";
    errorMsg.style.margin = "1rem 0";
    return (errorMsg.innerHTML = "Identifiant invalide");
  }
});
