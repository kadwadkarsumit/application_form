<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $age = htmlspecialchars($_POST['age']);
    $bloodGroup = htmlspecialchars($_POST['bloodGroup']);
    $address = htmlspecialchars($_POST['address']);

    // Prepare JSON response
    $response = [
        'status' => 'success',
        'data' => [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'age' => $age,
            'bloodGroup' => $bloodGroup,
            'address' => $address,
        ]
    ];

    // Set header for JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>
