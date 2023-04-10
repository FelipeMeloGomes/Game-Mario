const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const startGame = document.querySelector(".start-game");
const audio = document.getElementById("audio");


// adiciona e remove a classe que faz o mario pular
const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// musica no jogo
function playMusica() {
  var musica = document.getElementById("musica");
  musica.play();
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "/img/mario-dead.png";
    mario.style.width = "4.6875rem";
    mario.style.marginLeft = "3.125rem";

    startGame.src = "img/gameover.png";
    musica.pause();
    audio.play();


    clearInterval(loop);

    document.addEventListener("keydown", () => {
      location.reload();
    });
    document.addEventListener("click", () => {
      location.reload();
    });
  }
}, 10);

document.addEventListener("click", jump);
document.addEventListener("keydown", jump);
