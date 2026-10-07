const registrationForm = document.getElementById("registrationForm");
const registrationMessage = document.getElementById("registrationMessage");

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");


// Event Registration
registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        return;
    }

    const name = document.getElementById("participantName").value.trim();
    const eventName = document.getElementById("eventSelect").value;

    registrationMessage.textContent =
        "Registration successful! " + name +
        " has registered for " + eventName + ".";

    registrationMessage.classList.remove("d-none");

    registrationForm.reset();
});


// Event Buttons
const eventButtons = document.querySelectorAll(".register-event");

eventButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedEvent = button.getAttribute("data-event");

        document.getElementById("eventSelect").value = selectedEvent;

        document.getElementById("registration").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Contact Form
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    contactMessage.classList.remove("d-none");

    contactForm.reset();

});


// Dynamic Announcement
const announcements = [
    "Registration is now open for all events!",
    "Coding Challenge registrations are filling fast!",
    "Don't miss the Cultural Events on 15 and 16 October!",
    "College Fest 2026 - Celebrate, Compete and Connect!"
];

let announcementIndex = 0;

setInterval(function() {

    announcementIndex =
        (announcementIndex + 1) % announcements.length;

    document.getElementById("announcement").textContent =
        announcements[announcementIndex];

}, 4000);
