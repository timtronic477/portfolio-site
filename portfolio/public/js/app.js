const contactForm = document.querySelector('.contact-form');
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked")


        let formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        console.log(formData)
})