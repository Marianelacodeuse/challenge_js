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

function msg() {
  document.getElementById("remove").innerHTML = "";
  let nom = document.getElementById("Title").value;
  let prenom = document.getElementById("Author").value;
  document.getElementById("remove").innerHTML = `"${nom}"` + " by " + prenom;
  if (New.style.display == "block") {
    New.style.display = "none";
    List.style.display = "block";
    Remove.style.display = "block";
  }
  else if(    Remove.style.display == "block"){
    New.style.display = "none";
    List.style.display = "block";
    Remove.style.display = "none";
  }
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
