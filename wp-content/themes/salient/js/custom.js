jQuery.noConflict();

(function($) {
  $(function() {

    /**
     *  Function getUrlParameter - Retrieve a url parameter by name
     **/
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    };

    $('.checkout-button a').on('click', function(e) {
      e.preventDefault();
      // Retrieve the custom note
      var note = $('#custom-note').val();
      window.location.href = 'http://treatmint-box.myshopify.com/cart/' + getUrlParameter('id') + ':1/?note=' + encodeURIComponent(note);
    });

  });
})(jQuery);
