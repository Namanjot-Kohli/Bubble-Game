var timer=60;
var rnHit;
var Score = 0;



function createBubbles(){
    var clutter="";
    for(var i=0;i<85;i++){
        var rn= Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
        }
    document.querySelector("#pbottom").innerHTML=clutter;
}

function createTimer(){
    var intTimer=setInterval(function runTimer(){
    document.querySelector('#valTimer').innerHTML=timer;
    if (timer>0){
        timer--;
    }
    else{
        clearInterval(intTimer);
        document.querySelector("#pbottom").innerHTML=`<h1 style="font-size:200px;">GAME OVER</h1>`;

    }
},1000);
}

function createHit(){
    rnHit=Math.floor(Math.random()*10);
    document.querySelector('#valHit').innerHTML=rnHit;
}

function calcScore(){
    Score+=10;
    document.querySelector("#valScore").innerHTML=Score;
    createHit();
    createBubbles();

}

document.querySelector("#pbottom")
    .addEventListener("click", function(info){
        var HitNum = Number(info.target.innerHTML);
        if (HitNum === rnHit){
            calcScore();
        }
    });

createBubbles();
createHit();

function startgame(){
    document.querySelector(".start-main").style.display = "none";
    createTimer();
}





