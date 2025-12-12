document.body.style.backgroundColor = "#400000";
const c3 = document.getElementsByTagName("nav")[0];
c3.classList.remove("navbar-dark");
document.styleSheets[0].insertRule("a { color: tomato !important;}", 0);
document.styleSheets[0].insertRule(
  ".navbar-dark { background-color: brown !important;}",
  0
);
if (document.getElementById("avatar")) {
  document.getElementById("avatar").style.border = "thick double goldenrod";
  document.getElementById("avatar").style.borderRadius = "15px";
  document.getElementById("avatar").style.boxshadow = "0px 0px 5px black";
}
const collection = document.getElementsByClassName("drawn-card");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "firebrick";
  collection[i].style.opacity = "25";
}
const c2 = document.getElementsByClassName("drawn-card");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.borderRadius = "15px";
}
const c4 = document.getElementsByClassName("drawn-card");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.color = "goldenrod";
}
if (document.getElementsByClassName("drawn-album")) {
  const c5 = document.getElementsByClassName("drawn-album");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.opacity = "50";
  }
}
