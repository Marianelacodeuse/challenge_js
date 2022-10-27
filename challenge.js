MOIS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

jourSEMAINE = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

let dateGlobal = new Date();

let annee = dateGlobal.getFullYear();
let mois = dateGlobal.getMonth();
let jour = dateGlobal.getDate();
let jourSemaine = dateGlobal.getDay();

let heure = dateGlobal.getHours();
let minutes = dateGlobal.getMinutes();
let seconds = dateGlobal.getSeconds();

if (heure < 10) {
  heure = "0" + heure;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

mois = MOIS[mois];
jourSemaine = jourSEMAINE[jourSemaine];

const date = document.querySelector(".date-heure");

date.innerHTML =
  jourSemaine +
  " " +
  jour +
  " " +
  mois +
  " " +
  annee +
  " - " +
  heure +
  ":" +
  minutes +
  ":" +
  seconds;

const List = document.getElementById("list");
const New = document.getElementById("new");
const Contact = document.getElementById("contact");
const Remove = document.getElementById("remove");


// ============================clique du bouton add======================
function msg() {
  document.getElementById("remove").innerHTML = "";
  let nom = document.getElementById("Title").value;
  let prenom = document.getElementById("Author").value;

  //insertion de div
  let newDiv = document.createElement("div");
  newDiv.id = "nouveau";

  // insertion du texte
  let newPara = document.createElement("p");
  newPara.id = "nouveauPara";
  let texte = document.createTextNode(`" ${nom} "` + " by " + prenom);
  newPara.appendChild(texte);

  // insertion de bouton
  let newButton = document.createElement("button");
  newButton.id = "btn";
  let texte1 = document.createTextNode("Remove");
  newButton.appendChild(texte1);

  if (New.style.display == "block") {
    document.getElementById("active1").classList.add("active");
    document.getElementById("active2").classList.remove("active");
    document.getElementById("remove").classList.add("remove1");
    document.getElementById("remove").appendChild(newDiv);
    document.getElementById("nouveau").appendChild(newPara);
    document.getElementById("nouveau").appendChild(newButton);
    New.style.display = "none";
    List.style.display = "block";
    Remove.style.display = "block";
  }
  newButton.addEventListener("click", () => {
    if (Remove.style.display == "block") {
      document.getElementById("active1").classList.add("active");
      Remove.style.display = "none";
    }
  });
}



function fct1() {
  if (New.style.display == "block") {
    document.getElementById("active1").classList.add("active");
    document.getElementById("active2").classList.remove("active");
    New.style.display = "none";
    List.style.display = "block";
  } else if (Contact.style.display == "block") {
    document.getElementById("active1").classList.add("active");
    document.getElementById("active3").classList.remove("active");
    Contact.style.display = "none";
    List.style.display = "block";
  }
}
function fct2() {
  if (List.style.display == "block") {
    document.getElementById("active2").classList.add("active");
    document.getElementById("active1").classList.remove("active");
    List.style.display = "none";
    New.style.display = "block";
  } else if (Contact.style.display == "block") {
    document.getElementById("active2").classList.add("active");
    document.getElementById("active3").classList.remove("active");
    Contact.style.display = "none";
    New.style.display = "block";
  }
}
function fct3() {
  if (List.style.display == "block") {
    document.getElementById("active3").classList.add("active");
    document.getElementById("active1").classList.remove("active");
    List.style.display = "none";
    // New.style.display = "block" ;
    Contact.style.display = "block";
  } else if (New.style.display == "block") {
    document.getElementById("active3").classList.add("active");
    document.getElementById("active2").classList.remove("active");
    New.style.display = "none";
    Contact.style.display = "block";
  }
}
