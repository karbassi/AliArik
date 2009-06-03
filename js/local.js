jQuery(document).ready(function($) {
   $('.desc').hide();
   $('.talent').click(function(){
      $(".desc", this).slideToggle(400);
   });
});