window.onload = function() {
    var canvas = document.getElementById("canvas") ; 
    var context = canvas.getContext("2d") ; 

    // Now we will create the design
    context.fillStyle = "rgba(255 , 0 , 0 , 0.4)" ; 
    context.rect(0 , 0 , 100 , 100) ;
    context.fill() ;

    context.setTransform(1,1,1,0,0,0) ;
    context.beginPath() ;
    context.fillStyle = "rgba(0 , 255 , 0 , 0.4)" ;
    context.rect(75 , 75, 100 , 100) ;
    context.fill() ;

    context.setTransform(0 , 0.5 , 1 , 0.8 , 0 , 0) ;
    context.beginPath() ;
    context.fillStyle = "rgba(0 , 0 , 255 , 0.4 )" ;
    context.rect(50 , 50 , 100 , 100) ;
    context.fill() ;
}