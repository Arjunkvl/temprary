window.addEventListener("load", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
});

//header bar color change
// window.addEventListener("scroll", function (e) {
//   var element = this.document.getElementById("_h-holder");
//   var x = this.window.scrollY;
//   if (x > this.window.innerHeight) {
//     element.classList.add("k");
//   } else {
//     element.classList.remove("k");
//   }
// });

var isOpen = false;
function openList() {
  var list = this.document.querySelector('.header-holder ul');
  if (isOpen) {
    list.style.display = 'none';
    isOpen = false;
  } else {
    list.style.display = 'flex';
    console.log(list);
    isOpen = true;
  }
}
