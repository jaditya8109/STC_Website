$(document).ready(function(){
    $("#test").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().bottom
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

  function openNav() {
    document.getElementById("SideNav").style.width = "50vw";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("SideNav").style.width = "0";
  }  