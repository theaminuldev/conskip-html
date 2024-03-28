<?php

	// Only process POST reqeusts.
	if ($_SERVER["REQUEST_METHOD"] !== "POST") {
		http_response_code(403);
		echo "There was a problem with your submission, please try again.";
		exit;
	}

	// Get the form fields and remove whitespace.
	$name = str_replace(array("\r","\n"),array(" "," "), strip_tags(trim($_POST["name"] ?? '')));
	$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);  
	$message = trim($_POST["message"] ?? '');

	// Check that data was sent to the mailer.
	if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		http_response_code(400);
		echo "Please complete the form and try again.";
		exit;
	}

	// Set the recipient email address.
	$recipient = "jahid.nits@gmail.com";

	//Set the email subject.
	$subject = "New contact from $name";

	// Build the email content.
	$email_content = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";

	// Build the email headers.
	$email_headers = "From: $name <$email>";

	// Send the email.
	if (mail($recipient,$subject, $email_content)) {
		http_response_code(200);
		echo "Thank You! Your message has been sent.";
	} else {
		http_response_code(500);
		echo "Oops! Something went wrong and we couldn't send your message.";
	}

?>