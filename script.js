window.addEventListener("load", function () {
 
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
});

function play(){
  var a = document.getElementById('aud');
  var b = document.getElementById('aud_2');
  b.play();
  a.play();
}
var isOpen = false;
window.addEventListener("scroll", function (e) {
  var list = this.document.getElementById("_list");
    list.classList.remove('listOpen');
    isOpen = false;
});

function openList() {
  var list = this.document.getElementById("_list");
  if (isOpen) {
    // list.style.display = 'none';
    list.classList.remove('listOpen');
    isOpen = false;
  } else {
    // list.style.display = 'flex';
    list.classList.add('listOpen');
    isOpen = true;
   }
}
