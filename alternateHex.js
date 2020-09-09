const color=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

var btn = document.getElementById("button");
const colorName=document.querySelector(".color");

btn.addEventListener("click",function(){
   
    
    let RandomColor="#";
    for(let i=0;i<6;i++){
        RandomColor+=color[getRandomNumber()];
        
    }
    
  
    document.body.style.backgroundColor=RandomColor;
    colorName.textContent=RandomColor;
    colorName.style.color=RandomColor;
});


function getRandomNumber(){
     return Math.floor(Math.random()*color.length);
}
