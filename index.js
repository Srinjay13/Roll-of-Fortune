
function ref(){
    let p1= Math.ceil(Math.random()*5);
    let p2= Math.ceil(Math.random()*5);
    let s1_p1="dice"+p1+".png";
    let s2_p2="dice"+p2+".png";
    document.querySelector(".img1").setAttribute("src",s1_p1);
    document.querySelector(".img2").setAttribute("src",s2_p2);
    if(p1>p2)
    {
        document.querySelector("h2").innerHTML="🚩Player 1 wins !";
    }
    else if(p1<p2){
    document.querySelector("h2").innerHTML="🚩Player 2 wins !";
    }
    else{
        document.querySelector("h2").innerHTML="🚩No winner.Chicken dinner shared !"
    }

}
