// rememeber to fix the bug on app.js for the message portion of my email template (not saving correctly)

function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading"); // storing .class in "loading"
  const success = document.querySelector(".modal__overlay--success"); //storing .class in "success"
  loading.classList += " modal__overlay--visible"; //still unsure on what this is doing ???

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
