// ROADMAP FOR SUCCESS
// get an intership at a digital agency, basically having to building projects
// junior role at digital comany for about 6 months
// go to sofware comapny for about 6 months
// lastly, go for a bigger role at a sofware company

let isModalOpen = false; //modal opener
let contrastToggle = false; // starts off false //contract toggle
const scaleFactor = 1 / 20


function log() {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  // console.log(x, y);

  for (i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}
 


// function or contract toggle
function toggleContrast() {
  contrastToggle = !contrastToggle //changes to the oposite boolea, in this case since it starts off false, changes to true
  if (contrastToggle) { // "if" contractToggle is = to true, then add this theme onto the body, which it is
    document.body.classList += " dark-theme"

  }
  else (
    document.body.classList.remove ("dark-theme") // onces its classed as true, this else statement will be in effect until its true again
  )
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading"); // storing .class in "loading"
  const success = document.querySelector(".modal__overlay--success"); //storing .class in "success"
  loading.classList += " modal__overlay--visible"; // adding modal__overlay--visible to the end of loading class

  emailjs
    .sendForm(
      "service_urk5139",  //
      "template_5zkhpqe", //  connects email.js to your account/website
      event.target,       //
      "79JfK9r_OAocxqx1f" //
    )
    .then(() => { //unlocks promise... obviously
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

// remember to turn the underlines for the anchor links to white

// rememeber to fix the bug on email.js for the message portion of my email template (not saving correctly)

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}