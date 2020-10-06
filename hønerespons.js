const navbtns = document.querySelectorAll(".navbar-btn");
const sections = Array.from(document.querySelectorAll(".section"));
const navbar = document.querySelector("#navbar");
const lesMer = document.querySelector("#initbtn");

const hønebilder = Array.from(document.querySelectorAll(".høne-sec"));
const hønetitler = Array.from(document.querySelectorAll(".hønetittel"));

addEventListener("load", function () {
  navbtns.forEach((btn, i) => {
    let totalHeight = scrollYCoorWithNavbar(i);
    btn.addEventListener("click", function () {
      scrollTo(0, totalHeight);
    });
  });
  let totalHeight = scrollYCoorWithNavbar(1);
  lesMer.addEventListener("click", function () {
    scrollTo(0, totalHeight);
  });
  hønebilder.forEach((bilde, i) => {
    bilde.addEventListener("click", function () {
      let andreIndekser = hønebilder
        .filter((bilde, k) => i != k)
        .map((bilde, k) => {
          return hønebilder.indexOf(bilde);
        });

      respons.innerText =
        hønetitler[andreIndekser[0]].innerHTML +
        " and " +
        hønetitler[andreIndekser[1]].innerHTML +
        " will remember that...";
    });
  });
});

function scrollYCoorWithNavbar(i) {
  // i = sectionindex
  const sectionsOver = sections.filter((section, k) => {
    return k < i;
  });
  let totalHeight = -navbar.offsetHeight;
  sectionsOver.forEach((section) => {
    totalHeight += section.offsetHeight;
  });
  return totalHeight;
}
