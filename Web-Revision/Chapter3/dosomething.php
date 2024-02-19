<?php
//To hold the content

//Check if the form is submitted or not 
if($_SERVER["REQUEST_METHOD"] == "POST") {
    //REtrieve the form data 
    $name = $_POST["name"] ; 
    $comments = $_POST["comments"] ; 

    //Process the data (e.g , save to the database , send email etc)

    //For demonstration purposes , let's just display the recieved data
    echo "Name : " . $name . "<br>" ;
    echo "Comments : " . $comments ;
} else {
    //Redirect back to the form if accessed directly without submission 
    header("Location : datalist.html") ; 
    exit() ;
}