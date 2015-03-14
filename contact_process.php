<?php

// Gets posted data from the HTML form fields and creates local variables. The items with the ' marks around them are the name values from the fields in the HTML form example above. Note, the first three variables are required for all email messages (as described above).

$EmailFrom = trim(stripslashes($_POST['email']));
$EmailTo = "rk@rabithole.com";
$Subject = "Email from The Rabithole";
$name = trim(stripslashes($_POST['name']));
$company = trim(stripslashes($_POST['company']));
$tel = trim(stripslashes($_POST['tel']));
$comments = trim(stripslashes($_POST['comments']));
$current_date = date("Y-m-d"); // This date is created when the form is submitted.

// This section below validates the $EmailFrom (data from the Email From field) and $Phone (data from the Telephone field).

$validationOK=true;
if (trim($EmailFrom)=="") $validationOK=false;
if (trim($name)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  exit;
}

$myFilePath = "contacts/";
$myFileName = "form-data.csv";
$myPointer = fopen ($myFilePath.$myFileName, "a+");
$form_data = $current_date . "," . $EmailFrom . "," .  $name . "," . $company . "," . $tel . "," . $comments . "\n";
fputs ($myPointer, $form_data);
fclose ($myPointer);


// This section of PHP prepares the email body text. This is the fourth and final required element to compose and send an email message from a server-side script. 

$Body = "";
$Body .= "Name: " . $name . " \n" . "Company: " . $company . "\n" . "Phone: " . $tel . "\n" . "Comments: " . $comments;

// This is the sendmail function which send an email message from the server to the email address listed in the $EmailTo variable above.

$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// If the page validates and there are no errors in the PHP, this line redirect to ok.html page, which is the "success page" for the form submission.

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=ok.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=submit.html\">";
}


?>