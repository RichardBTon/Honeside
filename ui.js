let initbtn = document.querySelector("#initbtn");
let logo = document.querySelector("#logo");
let navbtns = document.querySelectorAll(".navbar-btn");

const navbar = document.querySelector("#navbar");
const sections = document.querySelectorAll(".section");

const respons = document.querySelector("#respons");
const hønebilder = document.querySelectorAll(".hønebilde");
const hønetitler = document.querySelectorAll(".hønetittel");

window.addEventListener("load", function () {
  // Scrollbuttons

  for (var i = 0; i < navbtns.length; i++) {
    if (navbtns.length != sections.length - 1) {
      console.warn("Sjekk antall navbtns i forhold til sections");
    }
    let ypos = -navbar.offsetHeight;
    let someSections = sections.slice(navbtns.length - i);

    for (var k = 0; k < someSections.length; k++) {
      ypos += sections[k].offsetHeight;
    }
    addScrollFunk(navbtns[i], ypos);
  }

  let sec1 = document.getElementById("sec-1");
  let ypos = sec1.offsetHeight - navbar.offsetHeight;

  addScrollFunk(initbtn, ypos);
  addScrollFunk(logo, 0);

  // Scrollbuttons end
});

function addScrollFunk(btn, ypos) {
  btn.addEventListener("click", function () {
    window.scrollTo(0, ypos);
  });
}

function høneRespons(i) {
  return function responsHøne(event) {
    let andreIndekser = hønebilder.filter((bilde, k) => k != i);
    // for (var k = 0; k < hønebilder.length; k++) {
    //   if (k != i) {
    //     andreIndekser.push(k);
    //   }
    // }
    respons.innerText =
      hønetitler[andreIndekser[0]].innerHTML +
      " and " +
      hønetitler[andreIndekser[1]].innerHTML +
      " will remember that...";
  };
  removeListeners();
}

for (var i = 0; i < hønebilder.length; i++) {
  {
    if (hønetitler.length != hønebilder.length) {
      console.log("Det er ikke like mange hønebilder som hønetitler");
    }

    // console.log(hønetitler[i].innerHTML, respons);
    // console.log(hønebilder[i]);
  }

  let høneRespons1 = høneRespons(i);
  // console.log(i);
  hønebilder[i].addEventListener("click", høneRespons1);

  // hønebilder[i].removeEventListener("click", høneRespons1);
}

function removeListeners() {
  // console.log("hei");
  for (var i = 0; i < hønebilder.length; i++) {
    hønebilder[i].removeEventListener("click", høneRespons1);
  }
}

function hei() {
  console.log("hei");
}
