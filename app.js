const colors =["green","red","blue","purple","black","orange"];

var btn=document.querySelector('#button');
var colorText=document.querySelector('.color');
btn.addEventListener('click',function(){
    const x=getRandomnumber();
    document.body.style.backgroundColor=colors[x];
    colorText.textContent=colors[x];
})

function getRandomnumber()
{
    return Math.floor(Math.random()*colors.length)
}
