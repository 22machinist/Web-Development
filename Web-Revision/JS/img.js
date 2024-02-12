window.onload = function() {
    var canvas = document.getElementById("canvas") ; 
    var context = canvas.getContext("2d") ;
    //Defining the variable which will carry the image 
    var img = new Image() ;
    //Adding the image source 
    img.src = "C:\Users\sharm\Projects\Web-Development\Web-Revision\IMG\marines.jpg" ; 
    //Defined the function to occur when the image is loaded
    img.onload = function() {
        context.lineWidth = 5 ;
        //The line below i described the image and the src is img
        context.drawImage(img , 0 , 0 , 400 , 400) ; 
        context.beginPath() ;
        context.lineWidth = 5 ; 
        context.fillStyle = "orange" ; 
        context.strokeStyle = "black" ; 
        context.rect(50 , 340 , 300 , 50) ;
        context.fill() ;
        context.stroke() ;
    }
}