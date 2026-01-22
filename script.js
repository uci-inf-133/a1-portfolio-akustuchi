// JS CONTACT FORM

// Don't load the contact form until after the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Link between HTML and script
    var form = document.getElementById("contactForm");

    // Form needs to listen until submit event
    form.addEventListener("submit", function(event) {
        // Stops page from refreshing after submit
        event.preventDefault();
        
        var userName = document.getElementById("name").value;
        
        alert("Thanks " + userName + "! I'll read your message soon.");
        form.reset();
    });
});