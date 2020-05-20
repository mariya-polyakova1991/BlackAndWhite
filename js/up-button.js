/*button
 */
const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add("shown");
  } else {
    upButton.classList.remove("shown");
  }
});
upButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
