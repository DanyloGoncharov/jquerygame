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
let agree = confirm("Do you want to play this game")
document.addEventListener("keydown", game, false);

function game(k) {
console.log(k.keyCode)
if (k.keyCode == 37 ) {
    $(".square").css("left", nextleft-5);
    console.log("The square is going to left")
    nextleft = nextleft-5
}
 if (k.keyCode == 38) { 
    $(".square").css("top", nexttop-5);
    console.log("The square is going to top")
    nexttop = nexttop-5
}
 if (k.keyCode == 39) {
    $(".square").css("left", nextleft+5);
    console.log("The square is going to right");
    nextleft = nextleft+5
}
 if (k.keyCode == 40 ) {
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