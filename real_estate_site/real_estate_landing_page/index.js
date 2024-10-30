function validateEmail(event) {
    event.preventDefault(); // Prevent the link from navigating

    // Access the email input field
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const location = document.getElementById("location").value.trim();

    // Basic  pattern for validation
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const namePattern = /^[A-Za-z\s]+$/;
    const numberPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
    const locationPattern = /^[A-Za-z\s]+$/;

    // Validates 
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    if (!namePattern.test(name)) {
        alert("Please enter a valid name.");
        return;
    }

    if (!numberPattern.test(number)) {
        alert("Please enter a valid number.");
        return;
    }


    if (!locationPattern.test(location)) {
        alert("Please enter a valid location .");
        return;
    }

    // If email is valid, show success message
    alert("click on ok for confirm to send a message.");

    //If message is received, show it on pop up
    alert("Your message is received we will contatct you soon.");
}