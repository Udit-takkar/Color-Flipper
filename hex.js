const color=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

var btn = document.getElementById("button");
const colorName=document.querySelector(".color");

btn.addEventListener("click",function(){
    let RandomColor=["#"];
    for(let i=0;i<6;i++)
    {
        RandomColor.push(color[getRandomNumber()]);
        
    }
    var final=RandomColor.join('');
    document.body.style.backgroundColor=final;
    colorName.textContent=final;
    colorName.style.color=RandomColor;
});


function getRandomNumber(){
     return Math.floor(Math.random()*color.length);
}
