  function openNav() {
    document.getElementById("SideNav").style.width = "50vw";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("SideNav").style.width = "0";
  }  

  // $(function() {
  //   $('a[href*=#]').on('click', function(e) {
  //     e.preventDefault();
  //     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  //   });
  // });