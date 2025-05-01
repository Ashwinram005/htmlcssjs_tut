var gn=document.getElementById("in");
var res=document.getElementById("res");
var randomnumber=Math.floor(Math.random()*10)+1;
var score=10;
var s=document.getElementById("Score");
function check(){
    var enternum=gn.value;
    if(enternum==randomnumber){
        console.log("right");
        res.textContent="Result :   YOU ARE RIGHT";
        res.style.backgroundColor="green";
    }
    else{
        res.textContent="Result :   YOU ARE WRONG";
        console.log(randomnumber)
        console.log("wrong");
        score--;
        s.textContent="Score: "+score;
        res.style.backgroundColor="red";
    }
}