// document.addEventListener("keydown", key, false);
// function key(e) {
//     console.log(e.keyCode)
// }
// const start_left =parseInt($(".square").css("left"),10)
// let height = document.documentElement.clientHeight;
// let width = document.documentElement.clientWidth; //
// document.addEventListener("keydown", game, false);
// function left() {
    //     $(".square").css("left", start_left-5)
    // }
// function game() {
    //     function play(k) {
        
        //         document.addEventListener("keydown", game, false);
        //     console.log(k.keyCode)
//     if (k.keyCode == 37) {
    //         left();
    
    //     }
    // }
    // play();
    // }
    // while (agree = true) {game() }

    
    
const start_left =parseInt($(".square").css("left"),10)
const start_top =parseInt($(".square").css("top"),10)
// let height = document.documentElement.clientHeight;
// let width = document.documentElement.clientWidth;
let nextleft = parseInt($(".square").css("left"),10);
let nexttop = parseInt($(".square").css("top"),10);
console.log(start_left , start_top)
document.addEventListener("keydown", game, false);
function key(e) {
    console.log(e.keyCode)
}
$(".left").click(function(){
    $(".square").css("left", nextleft-5);
    console.log("The square is going to left")
    nextleft = nextleft-5;
})
$(".up").click(function(){
    $(".square").css("top", nexttop-5);
    console.log("The square is going to top")
    nexttop = nexttop-5
})
$(".right").click(function(){
    $(".square").css("left", nextleft+5);
    console.log("The square is going to right");
    nextleft = nextleft+5
})
$(".down").click(function(){
    $(".square").css("top" , nexttop + 5);
    console.log("The square is going to bottom")
    nexttop = nexttop+5
})
$(".left").hover(function(){
    $(".square").css("left", nextleft-5);
    console.log("The square is going to left")
    nextleft = nextleft-5;
})
$(".up").hover(function(){
    $(".square").css("top", nexttop-5);
    console.log("The square is going to top")
    nexttop = nexttop-5
})
$(".right").hover(function(){
    $(".square").css("left", nextleft+5);
    console.log("The square is going to right");
    nextleft = nextleft+5
})
$(".down").hover(function(){
    $(".square").css("top" , nexttop + 5);
    console.log("The square is going to bottom")
    nexttop = nexttop+5
})
function game(k) {
console.log(k.keyCode)
if (k.keyCode == 37|| k.keyCode == 65 )  {
    $(".square").css("left", nextleft-5);
    console.log("The square is going to left")
    nextleft = nextleft-5;
}
 if (k.keyCode == 38 || k.keyCode == 87 ) { 
    $(".square").css("top", nexttop-5);
    console.log("The square is going to top")
    nexttop = nexttop-5
}
 if (k.keyCode == 39 || k.keyCode == 68) {
    $(".square").css("left", nextleft+5);
    console.log("The square is going to right");
    nextleft = nextleft+5
}
 if (k.keyCode == 40 || k.keyCode == 83) {
    $(".square").css("top" , nexttop + 5);
    console.log("The square is going to bottom")
    nexttop = nexttop+5
}
}
$(".start").click( function(){
    nexttop = start_top;
    nextleft = start_left;
    $(".square").css("left", start_left).css("top", start_top)
})
