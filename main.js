const tugma = document.getElementById("tugma");
const oshiriladigan_Son = document.getElementById("oshiriladigan-son");


let hozirgiSon = 0;
tugma.addEventListener("click",function(){
    hozirgiSon ++;
    oshiriladigan_Son.innerHTML = hozirgiSon;

})

const tugma2 = document.getElementById("tugma2");
const oshiriladigan_Son2 = document.getElementById("oshiriladigan-son2");


let hozirgiSon2 = 0;
tugma2.addEventListener("click",function(){
    hozirgiSon2 ++;
    oshiriladigan_Son2.innerHTML = hozirgiSon2;

})
