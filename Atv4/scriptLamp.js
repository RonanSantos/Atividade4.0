const lamp = document.getElementById("lampada");
 
let LampAcesa = false;
lamp.addEventListener("click",()=>{
    if(LampAcesa){
        lamp.src = "images/lampada.jpg";
        LampAcesa = false;
    }else{
        lamp.src = "images/lampada-on.jpg"
        LampAcesa = true;
    }
})
