window.addEventListener("load", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
});

//header bar color change
window.addEventListener('scroll',function(e){
  var element = this.document.getElementById('_header');
  var x = this.window.scrollY;
  if(x>this.window.innerHeight){
     element.classList.add('k');
    

  }else{
    element.classList.remove('k');
  }
});
 
