var colour=["green","red","yellow","blue"];

var level=0;

var gamesequence=[];

var usersequence=[];

var gamestarted=false;

$(document).keypress( function(){
    
    if(!gamestarted){
        $("h1").text("Level " + level);
        nextSequence();
        gamestarted = true;
    }
});

$(".strtbtn").click( function(){
    
    if(!gamestarted){
        $("h1").text("Level " + level);
        nextSequence();
        gamestarted = true;
    }
});


function nextSequence()
{

    level++;
    $("h1").text("level "+level);

    var randomnum= Math.floor(Math.random()*4);

    var randomcolour=colour[randomnum];



    gamesequence.push(randomcolour);

    var n=gamesequence.length;

        
        

    pressed(randomcolour);
        
        
    

}

function pressed(colour)
{
    $("#"+colour).addClass("pressed");
    setTimeout(function(){
        $("#"+colour).removeClass("pressed");
    } , 100);
}

function playsound(name) {

    var audio=new Audio("sounds/"+ name + ".mp3" );
    audio.play();
    
}

// var a= document.querySelectorAll(".btn").length;

// for (let i = 0; i< a; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click" , function(){
//         var chosencolour=this.id;
//         console.log(chosencolour);
//         usersequence.push(chosencolour);
//         playsound(chosencolour);
//         pressed(chosencolour);
        
//     });
    
// }

$(".btn").click(function() {

    
    var userChosenColour = $(this).attr("id");
    usersequence.push(userChosenColour);
  
    playsound(userChosenColour);
    pressed(userChosenColour);
  
    check(usersequence.length-1);
  });

  function check(curentlevel) {

    if(usersequence[curentlevel]===gamesequence[curentlevel])
    {
        if(usersequence.length===gamesequence.length)
        {
            setTimeout(function() {
                usersequence=[];
                nextSequence();
            } , 1000 );
        }
    }
    else{

        playsound("wrong");
        $("body").addClass("game-over");
        $("h1").text("GAME OVER,Press Any Key to Restart")

        setTimeout(function(){
            $("body").removeClass("game-over")
        } , 200);

        restart();

    }

  }
  

  function restart(){
     
     gamestarted=false;
     level=0;
     gamesequence=[];
     usersequence=[];
      
  }