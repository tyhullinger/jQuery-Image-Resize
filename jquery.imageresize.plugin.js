(function( $ ){

  $.fn.imageResize = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'max'         : 150,
    }, options);

    return this.each(function() {        
        if ($(this).height() > $(this).width()) {
          var h = settings.max;
          var w = Math.ceil($(this).width() / $(this).height() * settings.max);
        } else {
          var w = settings.max;
          var h = Math.ceil($(this).height() / $(this).width() * settings.max);
        }
        $(this).css({ height: h, width: w });
    });

  };
})( jQuery );
