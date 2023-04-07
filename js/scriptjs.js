AOS.init({
  once: false,
});
let btn_toggle = document.querySelector(".header .menu-toggle "),
  nav = document.querySelector(".header .navbar"),
  fa_toogle = document.getElementById("fa_toogle"),
  liBranch = document.getElementById("li-branch"),
  branchMenu = document.querySelector(".branch-menu"),
  upArrow = document.getElementById("up-arrow"),
  closeBranch = document.getElementById("close-branch");

btn_toggle.onclick = () => {
  fa_toogle.classList.toggle("fa-times");

  nav.classList.toggle("active");
  branchMenu.classList.remove("active-branch");
  upArrow.classList.remove("fa-sort-up");
};

liBranch.addEventListener("click", () => {
  branchMenu.classList.toggle("active-branch");
  upArrow.classList.toggle("fa-sort-up");
});
closeBranch.onclick = () => {
  branchMenu.classList.remove("active-branch");
  upArrow.classList.remove("fa-sort-up");
};

window.onscroll = () => {
  branchMenu.classList.remove("active-branch");
  upArrow.classList.remove("fa-sort-up");
  nav.classList.remove("active");
  fa_toogle.classList.remove("fa-times");
};
// document.onclick = function(e) {
//     // e.preventDefault()
//     if (e.target.id !== 'menu-toggle' && e.target.id !== 'menu-toggle') {
//         nav.classList.remove('active')

//     }
// }
