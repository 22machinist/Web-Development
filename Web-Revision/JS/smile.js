window.onload = function() {
    var canvas = document.getElementById("canvas") ;
    var context = canvas.getContext("2d") ;

    context.strokeStyle = "black" ; 
    context.lineWidth = 5 ;

    /* Creating the frame for our drawing */
    context.beginPath() ;
    context.fillStyle = "blue" ; 
    context.moveTo(50 , 20);
    context.arcTo(280 , 20 , 280 , 280 , 30);
    context.arcTo(280 , 280 , 20 , 280 , 30);
    context.arcTo(20 , 280 , 20 , 20 , 30);
    context.arcTo(20 , 20 , 280 , 20 , 30);
    context.stroke() ;
    context.fill() ;


    /* Drawing the circle  for head*/ 
    context.beginPath() ;
    context.fillStyle = "yellow" ;
    context.arc(150 , 150 , 100 , 0 , Math.PI*2 , true) ;
    context.fill() ;

    // Now we will draw eyes, nose and mouth 
    context.beginPath() ;
    context.moveTo(80 , 110) ;
    context.bezierCurveTo(95 , 85 , 115 , 85 , 130 , 110) ; 
    context.moveTo(170 , 110 ) ; 
    context.quadraticCurveTo(185 , 85 , 205 , 85 , 220, 110) ;
    context.moveTo(155 , 130);
    context.quadraticCurveTo(130, 145 , 155 , 155);
    context.moveTo(100 , 175) ;
    context.quadraticCurveTo(150 , 250 , 200 , 175);
    context.moveTo(50 , 20);
    context.stroke() ; 
}