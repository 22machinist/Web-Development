window.onload = function() {
    var canvas = document.getElementById("canvas") ;
    var context = canvas.getContext("2d") ; 

    //Let's begin the code 
    context.fillStyle = "#fff" ;
    context.strokeStyle = "black" ; 
    context.beginPath() ; 
    context.moveTo(188 , 38) ;
    context.lineTo(59 , 124) ; 
    context.lineTo(212 , 197) ;
    context.lineTo(341 , 111) ;
    context.lineTo(188 , 38) ; 
    context.closePath() ;
    context.fill() ;
    context.stroke() ; 

    context.fillStyle = "#ccc" ; 
    context.strokeStyle = "#black" ; 
    context.beginPath() ; 
    context.moveTo(341 , 111) ; 
    context.lineTo(212 , 197) ; 
    context.lineTo(212 , 362) ;
    context.lineTo(341 , 276) ;
    context.lineTo(341 , 111) ;
    context.closePath() ; 
    context.fill() ; 
    context.stroke() ;

    context.fillStyle = "#999" ; 
    context.strokeStyle = "black" ;
    context.beginPath() ;
    context.moveTo(59, 289) ;
    context.lineTo(59 ,124);
    context.lineTo(212 , 197);
    context.lineTo(212 , 352); 
    context.lineTo(59 , 289);
    context.closePath() ; 
    context.fill() ; 
    context.stroke() ; 
}