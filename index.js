let isModalOpen = false;

let contrastToggle = false; // starts off false

function toggleContract() {
  contrastToggle = !contrastToggle //changes to the oposite boolea, in this case since it starts off false, changes to true
  if (contrastToggle) { // "if" contractToggle is = to true, then add this theme onto the body, which it is
    document.body.classList += " dark-theme"

  }
  else (
    document.body.classList.remove ("dark-theme") // onces its classed as true, this else statement will be in effect until its true again
  )
}

function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading"); // storing .class in "loading"
  const success = document.querySelector(".modal__overlay--success"); //storing .class in "success"
  loading.classList += " modal__overlay--visible"; // adding modal__overlay--visible to the end of loading class

  emailjs
    .sendForm(
      "service_urk5139",
      "template_5zkhpqe",
      event.target,
      "79JfK9r_OAocxqx1f"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      success.classList += " modal__overlay--visible";
      alert(
        "The email service is temporarily unavailable. Please contact me directly on Letitia.cowan01@hotmail.com"
      );
    });
}

// rememeber to fix the bug on email.js for the message portion of my email template (not saving correctly)

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}