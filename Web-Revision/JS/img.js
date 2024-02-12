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

        //Now we will add Text using Canvas
        context.lineWidth = 2 ;
        context.font = '40px sans-serif' ;
        context.strokeStyle = "black" ;
        context.fillStyle = "white" ;
        context.fillText("Canvas is great !" , 60 , 375 ) ;
        context.shadowOffsetX = 10 ;
        context.shadowOffsetY = 5 ;
        context.shadowColor = "rgba(0 , 48 , 48 , 0.5)" ;
        context.shadowBlur = 5;
        context.strokeText("Canvas is great !" , 60 , 375) ;
    }
}