var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var Maqbool=new Audio("Maqbool.mp3");
var Mastaani=new Audio("Mastaani.mp3");
var Gayaab=new Audio("Gayaab.mp3");
var Ulfat = new Audio("Ulfat.mp3");
var Mehroom= new Audio("Mehroom.mp3");
var Lullaby=new Audio("Lullaby.mp3")
var Ekdin=new Audio("Ek Din.mp3")
var Dastaan =new Audio("Dastaan-e-Shauq.mp3")
var Koyla =new Audio("Koyla.mp3")
var Shaagird =new Audio("Shaagird Blues.mp3")


btn1.onclick = function()
{
    var change = document.getElementById("btn1");
    if(Maqbool.paused == true){
        
    Maqbool.play();
    change.innerHTML = "&#9724;";
      }else{
        Maqbool.pause();
     change.innerHTML = "&#9658;";
      }
      
     
     
}
btn2.onclick = function()
{
    var change = document.getElementById("btn2");
    if(Mastaani.paused == true){
    Mastaani.play();
    change.innerHTML = "&#9724;";
      }
      else{
     Mastaani.pause();
     change.innerHTML = "&#9658;";
    }
}
btn3.onclick = function()
{
    var change = document.getElementById("btn3");
    if(Gayaab.paused){
        Gayaab.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Gayaab.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn4.onclick = function()
{
    var change = document.getElementById("btn4");
    if(Ulfat.paused){
        Ulfat.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Ulfat.pause();
        change.innerHTML = "&#9658;";
      }
     
}
btn5.onclick = function()
{
    var change = document.getElementById("btn5");
    if(Mehroom.paused){
        Mehroom.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Mehroom.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn6.onclick = function()
{
    var change = document.getElementById("btn6");
    if(Lullaby.paused){
        Lullaby.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Lullaby.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn7.onclick = function()
{
    var change = document.getElementById("btn7");
    if(Ekdin.paused){
      Ekdin.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Ekdin.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn8.onclick = function()
{
    var change = document.getElementById("btn8");
    if(Dastaan.paused){
      Dastaan.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Dastaan.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn9.onclick = function()
{
    var change = document.getElementById("btn9");
    if(Koyla.paused){
      Koyla.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Koyla.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn10.onclick = function()
{
    var change = document.getElementById("btn10");
    if(Shaagird.paused){
      Shaagird.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Shaagird.pause();
        change.innerHTML = "&#9658;";
      }
      
}


// var song = document.getElementById("insane");
        // var song2 = document.getElementById("Mataanis")
        // var btn = document.getElementById("btn1");
        // btn.onclick = function(){
        //     if(song.paused){
        //         song.play();
        //     }else
        //     song.pause();
        // }

            // var numberOfButtons = document.querySelectorAll(".btn-play").length;
            // for (var i=0; i<numberOfButtons; i++)
            // {
            //     document.querySelectorAll(".btn-play")[i].addEventListener("click", function () {
            //         var btnId = this.id;
            //         switch(btnId){
            //             case "btn1":
            //                 console.log();
            //                 // var audio=new Audio("music/Insane - AP Dhillon.mp3");
            //                 // audio.play();
            //                 break;
            //             case "btn2":
            //             var audio=new Audio("music/Blue Eyes - Yo Yo Honey Singh (PagalWorld.com).mp3");
            //                 audio.play();
            //                 break;
            //             default:
            //         }
            //     });
            // }

                // var buttons = document.querySelectorAll(".btn-play").length;

                // for (var i = 0; i < buttons ; i++) {
                // document.querySelectorAll(".btn-play")[i].addEventListener("click", function() {
                   
                //     // alert("Button Clicked");
                //     if(document.getElementById("btn1").click==true)
                //     {
                //         alert("Button 1 Clicked")
                //     }else
                //     if(document.getElementById("btn2").click==true)
                //     {
                //         alert("btn 2 clicked")
                //     }else
                //     alert("wrong button")
                //  });
// }
