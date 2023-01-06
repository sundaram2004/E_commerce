


function subtotal1(){
   const quantity = document.getElementById("demo-1").value;
   const sub = quantity*50;
   const show = document.getElementById("subtotal-1");
   show.innerText = sub;
   
}
function subtotal2(){
    const quantity = document.getElementById("demo-2").value;
    const sub = quantity*75;
    const show = document.getElementById("subtotal-2");
    show.innerText = sub;
    
 }

 function subtotal3(){
    const quantity = document.getElementById("demo-3").value;
    const sub = quantity*40;
    const show = document.getElementById("subtotal-3");
    show.innerText = sub;
    
 }

function total(){
    const show1 = document.getElementById("subtotal-1").innerText;
    const show2 = document.getElementById("subtotal-2").innerText;
    const show3 = document.getElementById("subtotal-3").innerText;
    
    document.getElementById("fomo-1").innerText =+show1 + +show2 + +show3;
    document.getElementById("fomo-3").innerText =+show1 + +show2 + +show3 + 30;
}



