window.onload = function() {
    var canvas = document.getElementById("canvas") ;
    var context = canvas.getContext("2d") ; 

    context.strokeStyle = "blue" ; 
    context.fillStyle = "red" ; 
    context.lineWidth = 10 ;
    context.beginPath() ; 
    context.lineTo(200 , 10) ; 
    context.lineTo(200 , 50) ; 
    context.lineTo(380 , 10) ; 
    context.closePath() ; 
    context.stroke() ; 
    context.fill() ; 

    //Now we will define variable
    var lg = context.createLinearGradient(10 , 150 , 200 , 200) ;
    lg.addColorStop(0 , "#B03060") ; 
    lg.addColorStop(0.5 , "#4169E1") ; 
    lg.addColorStop(1 , "#FFE4E1") ; 

    context.fillStyle = lg ;
    context.beginPath() ;
    context.rect(10 , 150 , 200 , 200) ; 
    context.fill() ; 

    var rg = context.createRadialgradient(50 , 50 , 10 , 60 , 60 , 50) ;
    rg.addColorStop(0 , "#A7D30C") ;
    rg.addColorStop(0.9 , "#019F62") ; 
    rg.addColorStop(1 , "rgba(1, 159 , 98 , 0)") ;
    
    context.fillStyle = rg ; 
    context.beginPath() ; 
    context.fillRect(0 , 0 , 130 , 230) ; 

    context.beginPath() ;
    context.lineTo(250 , 150) ; 
    context.lineTo(330 , 240) ; 
    context.lineTo(410 , 150) ;
    context.stroke() ;
}