$(document).ready(function () {
    $('#bloodDonationForm').on('submit', function (e) {
      e.preventDefault(); // Prevent form from submitting the traditional way
  
      // Serialize form data
      const formData = $(this).serialize();
  
      // Send form data via AJAX
      $.ajax({
        url: 'submit.php',
        type: 'POST',
        data: formData,
        success: function (response) {
          if (response.status === 'success') {
            // Display submitted data
            const resultHtml = `
              <h2>Submitted Information</h2>
              <p><strong>Name:</strong> ${response.data.name}</p>
              <p><strong>Email:</strong> ${response.data.email}</p>
              <p><strong>Phone:</strong> ${response.data.phone}</p>
              <p><strong>Age:</strong> ${response.data.age}</p>
              <p><strong>Blood Group:</strong> ${response.data.bloodGroup}</p>
              <p><strong>Address:</strong> ${response.data.address}</p>
            `;
            $('#result').html(resultHtml);
          } else {
            $('#result').html('<p>Submission failed. Please try again.</p>');
          }
        },
        error: function () {
          $('#result').html('<p>There was an error processing your request.</p>');
        }
      });
    });
  });
  