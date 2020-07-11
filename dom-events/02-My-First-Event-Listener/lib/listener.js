// TODO: React to a click on the button!



const clickMeButton = document.querySelector('#clickme');


clickMeButton.addEventListener('click', event => {
clickMeButton.innerText = "Bingo!"
clickMeButton.disabled;
const playmp3 = document.getElementById("audio")
var promise = playmp3.play();
});



//Trying add audio part
// const playmp3 = document.getElementById("audio")
// playmp3.addEventListener('click', event => {
//   playmp3.play();
// });

// playmp3.addEventListener('click', handleplaymp3, false);
// playmp3();

// function handleplaymp3(){
// if (playmp3.paused) {
//   playaudio();
// } else {
//   playmp3.puase();
//   clickMeButton.classList.remove("playing");
// }

//  }

//function plaympeg() {
//  document.getElementById("audio").play();
//};
//console.log(playmp3)





