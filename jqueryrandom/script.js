let width = document.documentElement.clientWidth - 200;
let height = document.documentElement.clientHeight - 200;
// let rotatew = Math.floor(Math.random()*width);
// let rotateh = Math.floor(Math.random() * height)
$(".square").hover(function() {
    $(this).css("background", "hsl("+ Math.floor(360*Math.random()) +", 100%, 50%)").css('margin', 0).animate({opacity:0.5, left : Math.floor(Math.random()*width)  , top: Math.floor(Math.random() * height)})
    console.log( width, height)
   
})
$(".square").click(function() {alert("You are win")})
// css("background", "hsl("+ Math.floor(360*Math.random()) +", 100%, 50%)")