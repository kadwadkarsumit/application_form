$(document).ready(function() {
    $('#transferForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Perform client-side validation if needed here
        this.submit(); // Submit the form
    });
});