window.onload = function() {
    var canvas = document.getElementById("canvas") ; 
    var context = canvas.getContext("2d") ; 
    context.strokeStyle = "orange" ;
    context.strokeRect(10 , 10 , 150 , 50) ; 
    context.fillStyle = "rgba(218 , 0, 0 , 0.4)" ;
    context.fillRect(150 , 30 , 75 , 75) ;

    // Creating the line of "V-shape"
    context.beginPath() ; 
    context.lineTo(20, 100) ; 
    context.lineTo(120,300) ;
    context.lineTo(220,100) ;
    context.stroke() ;

    context.strokeStyle = "blue" ; 
    context.fillStyle = "red" ; 

    //Defining the specifications of line 
    context.lineWidth = 10 ;
    context.beginPath() ; // This will begin path
    context.lineTo(200 , 10) ; 
    context.lineTo(200 , 50) ;
    context.lineTo(380 , 10) ;
    context.closePath() ; // can optionally be called to close path
    context.stroke() ; 
    context.fill() ;

    //Let us use the Linear Gradient feature 
    //createLinearGradient() is used to create A gradient object

    var lg = context.createLinearGradient(10 , 150 , 200 , 200) ; //The object is placed at 10 , 150 and it will go 200 pixels in both directions
    // addColorStop is used to add gradient colors The offset must be between 0 and 1 
    
    lg.addColorStop(0 , "#B03060") ; 
    lg.addColorStop(0.75 , "#4169E1") ; 
    lg.addColorStop(1 , "#FFE4E1") ; 
    context.fillStyle = lg ;
    context.beginPath() ; 
    context.rect(10 , 150 , 200 , 200) ; 
    context.fill() ;

}