

const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\-_\.]*@[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_\.]+$/
    return re.test(String(email).toLowerCase());
  };

const isValidPhone = (phone) => {
    const re = /^[0-9 \+']+$/i
    return re.test(String(phone).toLowerCase());
  };


const form = document.querySelector('form');
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector('input[name="name"]');
const lastnameInput = document.querySelector('input[name="lastname"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');

const open = document.getElementById("open-popup");
const modal_container = document.getElementById("model_container");
const close = document.getElementById("close");


const inputs = [nameInput,lastnameInput,emailInput,phoneInput,messageInput]

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
elm.classList.remove("invalid");
elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
elm.classList.add("invalid");
elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {

 if(!isValidationOn) return;
 isFormValid = true;
 inputs.forEach(resetElm);
       
 if(!nameInput.value) {
 isFormValid = false;
 invalidateElm(nameInput);
  }

 if(!lastnameInput.value) {
 isFormValid = false;
 invalidateElm(lastnameInput);
 }

 if(!isValidEmail(emailInput.value)) {
 isFormValid = false;
 invalidateElm(emailInput);
 }

 if(!isValidPhone(phoneInput.value)) {
 isFormValid = false;
 invalidateElm(phoneInput);
 }

  if(!messageInput.value) {
  isFormValid = false;
  invalidateElm(messageInput);
   }

  };
 
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if(isFormValid){
             form.remove();
            thankYou.classList.remove("hidden");

             open.addEventListener('click',() => {
              modal_container.classList.add('show');
              console.log("show popup")
              });
         
  }
      
  });

  inputs.forEach((inputs) => {
  inputs.addEventListener("inputs", () => {
  validateInputs();
   });
    });

 
    close.addEventListener('click',() => {
            modal_container.classList.remove('show');
            });
    

 