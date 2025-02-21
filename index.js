let email= document.querySelector('input[type="text"]');
let password= document.querySelector("input[type='password']");
let butto = document.querySelector('#login');

let audio= document.querySelector('audio');

let loader = document.querySelector('.loader');



butto.addEventListener('click',(event)=>{
    if(email.value!=="" && password.value !== ""){
        event.preventDefault();

        audio.currentTime= 0.2;
        audio.play();

        loader.style.display='flex';

       audio.onended = function () {
        loader.style.display='hidden';
            window.location.href = "deep3.html";  
        };

    }else{
        alert("fill the box please")
        loader.style.display='hidden';
    }
    
   

})



