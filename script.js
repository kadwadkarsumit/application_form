$(document).ready(function () {
  $('#bloodDonationForm').on('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Gather form data
      const fullName = $('#name').val();
      const email = $('#email').val();
      const phone = $('#phone').val();
      const age = $('#age').val();
      const bloodGroup = $('#bloodGroup').val();
      const address = $('#address').val();

      // Display the result
      $('#result').html(`
          <h2>Submission Successful!</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Blood Group:</strong> ${bloodGroup}</p>
          <p><strong>Address:</strong> ${address}</p>
      `).show(); // Show the result div
  });
});
