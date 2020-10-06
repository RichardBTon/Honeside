let initbtn = document.getElementById("initbtn");
let logo = document.getElementById("logo");
let navbtns = document.getElementsByClassName("navbar-btn");

const navbar = document.getElementById("navbar");
const sections = Array.from(document.getElementsByClassName("section"));

const respons = document.getElementById("respons");
const hønebilder = Array.from(document.getElementsByClassName("hønebilde"));
const hønetitler = Array.from(document.getElementsByClassName("hønetittel"));

window.addEventListener("load", function () {
  // Scrollbuttons

  for (var i = 0; i < navbtns.length; i++) {
    if (navbtns.length != sections.length - 1) {
      console.log("Sjekk antall navbtns i forhold til sections");
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
    let andreIndekser = [];
    for (var k = 0; k < hønebilder.length; k++) {
      if (k != i) {
        andreIndekser.push(k);
      }
    }
    respons.innerHTML =
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
  hønebilder[i].addEventListener("click", hei);

  // hønebilder[i].removeEventListener("click", høneRespons1);
}

function removeListeners() {
  // console.log("hei");
  for (var i = 0; i < hønebilder.length; i++) {
    hønebilder[i].removeEventListener("click", hei);
  }
}

function hei() {
  console.log("hei");
}
