// ===========================
// ЛЕПЕСТКИ САКУРЫ
// ===========================

const petalsContainer = document.getElementById("petals");


function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");


    // случайная позиция сверху
    petal.style.left = Math.random() * 100 + "vw";

    petal.style.top = "-20px";


    // случайный размер
    const size = Math.random() * 8 + 8;

    petal.style.width = size + "px";
    petal.style.height = size / 2 + "px";


    petalsContainer.appendChild(petal);



    // движение вниз вправо

    const duration = Math.random() * 5 + 5;


    petal.animate(

        [
            {
                transform:
                "translate(0,0) rotate(0deg)"
            },

            {
                transform:
                `translate(${Math.random()*150 + 80}px, 110vh) rotate(360deg)`
            }

        ],

        {
            duration: duration * 1000,
            easing:"linear"
        }

    );



    // удалить после полёта

    setTimeout(()=>{

        petal.remove();

    }, duration * 1000);

}


// создавать лепестки постоянно

setInterval(createPetal,250);




// ===========================
// НАЖАТИЕ НА АКТЁРА
// ===========================


const actor = document.getElementById("actor");

const text = document.getElementById("clickText");

const music = document.getElementById("music");


let started = false;



actor.addEventListener("click",()=>{


    if(started) return;

    started = true;



    // убрать надпись

    text.classList.add("hide");



    // включить музыку

    music.volume = 0.8;

    music.play();



    // заставить прыгать

    actor.classList.add("jump");



});
