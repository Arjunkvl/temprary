window.addEventListener("load", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
});

//Buton Related
 
