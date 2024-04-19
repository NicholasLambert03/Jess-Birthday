$.get("nav.html", function(data) {
    document.getElementById('nav').innerHTML = data;
});
window.onload = function(){
    console.log(document)

    var navLinks = document.querySelectorAll(".nav a");

    // Loop through the links
    console.log(navLinks)
    for (var i = 0; i < navLinks.length; i++) {
        // Construct the full URL for the nav link
        var navLinkUrl = window.location.origin + navLinks[i].getAttribute('href');

        // Check if the link's href matches the current page URL
        if (navLinkUrl == window.location.href) {
            // If it does, add the "active" class
            navLinks[i].classList.add("active");
        }
    }
}