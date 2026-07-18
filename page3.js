function openLetter(){


const envelope =
document.getElementById("envelope");


const letter =
document.getElementById("letter");


const song =
document.getElementById("letterSong");



envelope.classList.add("open");



setTimeout(()=>{


envelope.classList.add("hide");


},1000);




setTimeout(()=>{


letter.classList.add("show");


},1300);




song.play();



}







// падающие сердечки и сакура 🌸💗



const particles =
document.querySelector(".particles");




function createParticle(){



const img =
document.createElement("img");



if(Math.random()<0.7){


img.src="heart.png";


}

else{


img.src="cherry_flower.png";


}



img.className="particle";



img.style.left =
Math.random()*100+"%";



img.style.width =
(15+Math.random()*20)+"px";



img.style.height =
img.style.width;



img.style.animationDuration =
(10+Math.random()*8)+"s";



particles.appendChild(img);




setTimeout(()=>{


img.remove();


},18000);



}



setInterval(createParticle,900);