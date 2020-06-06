const homeBtn = document.querySelector(".home-btn");
const homeTitle = document.querySelector(".home");
const cardContent = document.querySelector(".card");
const homeContent = document.querySelector(".home-content");
const contactContent = document.querySelector(".contact-content");
const contactBtn = document.querySelector(".contact-btn");
const contactHead = document.querySelector(".contact");
const contactBody = document.querySelector(".contact-body");
const contactUs = document.querySelector(".contact-us");
const serviceBtn = document.querySelector(".services-btn");
const ourServices = document.querySelector(".list-services");
const serviceBody = document.querySelector(".service-body");
const aboutBtn = document.querySelector(".about-btn");
const history = document.querySelector(".history");
const aboutBody = document.querySelector(".about-body");

homeBtn.addEventListener("click", changeContent);
contactBtn.addEventListener("click", changeContact);
serviceBtn.addEventListener("click", showServices);
aboutBtn.addEventListener("click", showHistory);

services = ["web development", "mobile apps", "software dev"];

function changeContent(ev) {
  homeTitle.classList.add("home-head");
  cardContent.classList.add("black");
  homeContent.innerText =
    "Welcome Home.follow our easy navigation to know more about us.";
  homeBtn.innerText = "Home page";
}

function changeContact(ev) {
  contactContent.innerText =
    "Would you like to get in touch? here's how you can reach us.";
  contactHead.classList.add("home-head");
  contactBody.classList.add("black");
  contactBtn.innerText = "Contact details";
  contactUs.innerHTML =
    "<li><a href='https://github.com/Hardy-Kathurima'</a>Github </li>";

  // contactBtn.addEventListener("click", previous);

  // function previous(ev) {
  //     contactContent.innerText = "We would love To hear from you.";
  //     contactHead.classList.remove("home-head");
  //     contactBody.classList.remove('black');
  //     contactBtn.innerText = "View contact details";
  // }
}
function showServices(ev) {
  var newServices = [...services];
  ourServices.innerText = `${newServices}`;
  serviceBody.classList.add("black");
  serviceBtn.innerText = "services";
}

function showHistory(ev) {
  history.innerText =
    " Our team is comprised of software devs from allover the country.We boast of high quality work.";
  aboutBody.classList.add("black");
  aboutBtn.innerText = "About us";
}
