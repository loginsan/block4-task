(function() {
  "use strict";
  const breakp = window.matchMedia( "(min-width:33.75em)" );
  let brandsSwiper;
  let brandsPages = document.querySelector(".brands__pagination");

  const enableSwiper = function() {
    brandsSwiper = new Swiper(".brands__container", {
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".brands__pagination",
        clickable: true
      }
    });
  };

  const breakpChecker = function() {
    if (breakp.matches === true) {
      if (brandsSwiper !== undefined) {
        brandsPages.classList.add("dn");
        brandsSwiper.destroy(true, true);
      }
      return;
    } // else
    brandsPages.classList.remove("dn");
    return enableSwiper();
  };
  breakp.addListener(breakpChecker);
  breakpChecker();
})();

let brandsButton = document.querySelector(".brands__expand-button");
let brandsBox = document.querySelector(".brands__container");
brandsButton.addEventListener("click", function() {
  doExpand(this, brandsBox, "brands__container", "Показать все");
});

let heroButton = document.querySelector(".hero__expand-button");
let heroBox = document.querySelector(".hero__spoiler");
heroButton.addEventListener("click", function() {
  doExpand(this, heroBox, "hero__spoiler", "Читать далее");
});

let doExpand = function(button, target, cname, text, textR) {
  textR = textR || "Скрыть";
  let reverse = button.classList.contains("expand-button--reverse");
  let height = target.scrollHeight;
  target.style = (reverse)? "" : `height: ${height}px`;
  target.classList.toggle(cname + "--short");
  button.classList.toggle("expand-button--reverse");
  button.textContent = (reverse)? text : textR;
}
