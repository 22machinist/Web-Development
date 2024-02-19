<?php
//Form.html

//Check if the form was submitted 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Retrieving the form data
    $name = $_POST["name"] ; 
    $email = $_POST["email"] ; 

    //Process the data (e.g , save to a database , send an email , etc)

    //For demonstration purposes , let's just display the recieved data

    echo "Name : ". $name . "<br>" ;
    echo "Email: " .$email ;
} else {
    //Redirecting to the form if accessed directly without submission
    header("Location : form.html") ; 
    exit() ;
}