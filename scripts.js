// Handle the form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("This Form is a WIP so please send me an email. Thanks in advance!");
}

// Load the navbar for all pages
document.getElementById("navbar").innerHTML='<object type="text/html" data="navbar.html" ></object>';
