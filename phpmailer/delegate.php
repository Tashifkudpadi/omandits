<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$registrationcode = filter_var($_POST['registrationcode'], FILTER_SANITIZE_STRING);
$title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
$firstname = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
$lastname = filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
$jobtitle = filter_var($_POST['jobtitle'], FILTER_SANITIZE_STRING);
$companyname = filter_var($_POST['companyname'], FILTER_SANITIZE_STRING);
$email= filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$phone= filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
$industry = filter_var($_POST['industry'], FILTER_SANITIZE_STRING);
$country = filter_var($_POST['country'], FILTER_SANITIZE_STRING);
$employees= filter_var($_POST['employees'], FILTER_SANITIZE_STRING);
$solutions= filter_var($_POST['solutions'], FILTER_SANITIZE_STRING);
$role= filter_var($_POST['role'], FILTER_SANITIZE_STRING);
$attend= filter_var($_POST['attend'], FILTER_SANITIZE_STRING);

// referee details
$refereeFullname= filter_var($_POST['referee_fullname'], FILTER_SANITIZE_STRING);
$refereeCompanyname= filter_var($_POST['referee_companyname'], FILTER_SANITIZE_STRING);
$refereeJobTitle= filter_var($_POST['referee_jobtitle'], FILTER_SANITIZE_STRING);
$refereeEmailId= filter_var($_POST['referee_emailid'], FILTER_SANITIZE_STRING);
$refereePhoneno= filter_var($_POST['referee_phoneno'], FILTER_SANITIZE_STRING);


$checkboxState1 = isset($_POST['my_checkbox1']) && $_POST['my_checkbox1'] === 'on' ? 'Checked' : 'Unchecked';
$checkboxState2 = isset($_POST['my_checkbox2']) && $_POST['my_checkbox2'] === 'on' ? 'Checked' : 'Unchecked';
$checkboxState3 = isset($_POST['my_checkbox3']) && $_POST['my_checkbox3'] === 'on' ? 'Checked' : 'Unchecked';
$checkboxState4 = isset($_POST['my_checkbox4']) && $_POST['my_checkbox4'] === 'on' ? 'Checked' : 'Unchecked';



try {
    //Server settings
  $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = 'mohammad.afsal@genfinityglobal.com';
    $mail->Password = 'kmkxavlpibwkplfw';

    //Recipients
    $mail->setFrom('mohammad.afsal@genfinityglobal.com', 'Omandits');
    $mail->addAddress('mohammad.afsal@genfinityglobal.com', 'Omandits');     //Add a recipient
    $mail->addReplyTo($email, $name);

    //Content
    $mail->isHTML(true);                                 
    $mail->Subject = 'Mail from Omandits';
    $mail->Body = "Registration code: $registrationcode<br>
    Name: $title $firstname $lastname<br>Jobtitle: $jobtitle<br>
    Company name: $companyname<br>Email: $email<br>Phone:  $phone<br>Industry: $industry<br>
    Country: $country<br> No.of employees: $employees<br>Solutions: $solutions<br>Role: $role<br>Attend: $attend <br><br> <h4>WOULD YOU LIKE TO NOMINATE/REFER SOMEONE TO ATTEND THE EVENT?</h4> <br>Referee Full name: $refereeFullname <br>Referee Company name: $refereeCompanyname <br>Referee Job title: $refereeJobTitle <br>Referee Email Id: $refereeEmailId<br> Referee Phone number: $refereePhoneno <br><br><br> <h4>CONFIRMATION
    <h4/> <h6>By filling up this form, I agree to the above terms and conditions. I officially and formally mark my acceptance to participate at the event.</h6> : $checkboxState1 <br> <h6>I approve Trescon to share the contact information and/or other details filled in this form with its sponsors/partners for marketing purposes</h6> : $checkboxState2 <br> <h6>(CONSENT) I provide my consent to Trescon to send me latest updates via email with information related to their events and activities</h6> : $checkboxState3 <br> <h6>I agree to the general Terms and conditions and Privacy policy of Trescon.</h6> : $checkboxState4";

    $mail->send();
    echo 'Message has been sent';
    alert('Msg sent successfully!');

       // Server settings for confirmation email
    $mail->ClearAddresses();
    $mail->ClearAttachments();

    $mail->setFrom('mohammad.afsal@genfinityglobal.com', 'Omandits');
    $mail->addAddress($email,$name);
    $mail->addReplyTo('mohammad.afsal@genfinityglobal.com', 'Omandits');

    // Content for confirmation email
    $mail->isHTML(true);
    $mail->Subject = 'Confirmation Email';

     // Signature with company logo
    $signature = '
    <div style="border-top: 1px solid #ccc; padding-top: 10px;">
        <p style="font-size: 18px;">Thank you for contacting Us. We will contact you shortly!</p>
    </div>';
    $mail->Body = $signature;

    // Send the confirmation email
    $mail->send();
    
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}