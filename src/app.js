const bleu = document.getElementById("blue");
const rouge = document.getElementById("red");
const vert = document.getElementById("green");
const zoneDeDepo = document.getElementById("zoneDeDepo");
const divParent = document.getElementById("Align");

bleu.addEventListener("click", (e) => {
  const addDiv = document.createElement("div");
  addDiv.className = "draggable";
  console.log("bleu");
});

rouge.addEventListener("click", (e) => {
    const addDiv = document.createElement("div");
  addDiv.className= "draggable";
  console.log("rouge");
});

vert.addEventListener("click", (e) => {
    const addDiv = document.createElement("div");;
  addDiv.classList.add("draggable");
  console.log("vert");
});

// for (let i = 0; i < 3; i++) {
//   div[i].addEventListener("mousedown", () => {
//     window.addEventListener("mousemove", (e) => {
//         let x = e.clientX;
//         let y = e.clientY;
//     });
//   });

//   div[i].addEventListener('mouseup', () => {
//     window.removeEventListener;
//   });
// }

// zoneDeDepo.addEventListener("mouseup", (e) => {
//   console.log("Good bye");
// });

// zoneDeDepo.addEventListener("mouseenter", (e) => {
//   console.log("Don't walk on my grass !");
// });

// zoneDeDepo.addEventListener("mouseleave", (e) => {
//   console.log("Thanks bro");
// });
