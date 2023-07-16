const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publickey = "bGHG2Q1c8qg2Mo6YV";
const serviceID = "service_r7x0qmc";
const templateID = "template_mmc7q4l";

emailjs.init("bGHG2Q1c8qg2Mo6YV");

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  submitBtn.innerText = "Just A Moment...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message Sent Successfully";
      nameInput.value = "";
      emailInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    });
});
