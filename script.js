const bodyCol = document.querySelector("body");
const colors = ["yellow", "red", "green", "rgba(0, 0, 0, 0.6)"];
//bodyCol.addEventListener("click", show_caracola);

function show_caracola() {
  var random1 = Math.floor(Math.random() * 4 + 1);
  var random2 = Math.floor(Math.random() * colors.length);

  if (random1 == 1) {
    random1 = "Sí.";
  } else {
    if (random1 == 2) {
      random1 = "No.";
    } else {
      if (random1 == 2) {
        random1 = "Quizá.";
      } else {
        if (random1 == 1) {
          random1 = "Nada.";
        } else {
          random1 = "Intenta preguntar de nuevo.";
        }
      }
    }
  }
  document.getElementById("caracola").innerHTML = "<h1>" + random1 + "</h1>";
  bodyCol.style.backgroundColor = colors[random2];
}
