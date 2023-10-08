let close = document.querySelector("#close");
let minu = document.querySelector("#ham-ul");
let ham = document.querySelector("#ham");
let im = document.querySelector(".intro");

function myFunction() {
  minu.classList.remove("hidden");
  im.classList.add("hidden");
}
close.onclick = function () {
  minu.classList.add("hidden");
  im.classList.remove("hidden");
};
