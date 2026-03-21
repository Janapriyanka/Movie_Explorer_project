function setError(id, message, input) {
    document.getElementById(id).textContent = message;
    input.style.borderColor = "#ff6b6b";
}

function clearError(id, input) {
    document.getElementById(id).textContent = "";
    input.style.borderColor = "rgba(255,255,255,0.1)";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let form = this;

    let nameInput = form.name;
    let emailInput = form.email;
    let subjectInput = form.subject;
    let messageInput = form.message;

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let subject = subjectInput.value;
    let message = messageInput.value.trim();

    let isValid = true;

    clearError("nameError", nameInput);
    clearError("emailError", emailInput);
    clearError("subjectError", subjectInput);
    clearError("messageError", messageInput);
    document.getElementById("successMsg").textContent = "";

    if (!name) {
        setError("nameError", "Enter your name", nameInput);
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) {
        setError("emailError", "Enter your email", emailInput);
        isValid = false;
    } else if (!email.match(emailPattern)) {
        setError("emailError", "Invalid email", emailInput);
        isValid = false;
    }

    if (!subject) {
        setError("subjectError", "Choose a subject", subjectInput);
        isValid = false;
    }

    if (message.length < 10) {
        setError("messageError", "Min 10 characters", messageInput);
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMsg").textContent = "🎉 Message sent!";
        form.reset();

        setTimeout(() => {
            document.getElementById("successMsg").textContent = "";
        }, 3000);
    }
});

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});