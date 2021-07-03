canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
function add(){
background_imgTag=new Image();
background_imgTag.src=}
window.addEventListener("keydown",my_Keydown);
function my_Keydown(e){
KeyPressed=e.keyCode;
console.log(KeyPressed);
if((KeyPressed >= '97' && KeyPressed <='122')|| (KeyPressed >='65' && KeyPressed<=90)){
alphabetkeys();
document.getElementById("d1").innerHTML="You pressed the Alphabet key"
console.log("Alphabets");    
}
 if(KeyPressed == '40'){
 down();
 console.log("down")    
 }
 if(KeyPressed == '37'){
 left();
 console.log("left");    
 }
 if(KeyPressed == '39'){
 right();
 console.log("right");    
 }    
}