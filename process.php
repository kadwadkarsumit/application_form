<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $currentInstitution = htmlspecialchars($_POST['currentInstitution']);
    $newInstitution = htmlspecialchars($_POST['newInstitution']);
    $reason = htmlspecialchars($_POST['reason']);

    // Display the submitted information
    echo "<h2>Transfer Application Submitted</h2>";
    echo "<strong>Name:</strong> " . $name . "<br>";
    echo "<strong>Email:</strong> " . $email . "<br>";
    echo "<strong>Current Institution:</strong> " . $currentInstitution . "<br>";
    echo "<strong>New Institution:</strong> " . $newInstitution . "<br>";
    echo "<strong>Reason for Transfer:</strong> " . nl2br($reason) . "<br>";
} else {
    echo "Invalid request.";
}
?>