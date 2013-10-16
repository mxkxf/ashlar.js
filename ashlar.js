(function ($) {

  $.fn.ashlar = function (options) {

    // Should probably refactor naming structure, seems messy

    var settings = $.extend({
      baseline: 24,
      baselineColour: '#ddd',
      cols: 12,
      colColour: '#eee',
      gutter: 20, 
      horizontal: true,
      vertical: true
    }, options);

    return this.each(function () {

      var $container       = $(this),
        containerWidth     = $container.width(),
        containerHeight    = $container.height(),
        gutterWidth        = ((settings.gutter / (containerWidth + settings.gutter)) * 100),
        colWidth           = (100 / settings.cols) - gutterWidth + (gutterWidth / settings.cols),
        baselineSansBorder = (settings.baseline - 1),
        baselines          = Math.floor(containerHeight / settings.baseline),
        baseline           = Math.floor(settings.baseline),
        $grid,
        $col,
        $row,
        i;

      // Create grid element to wrap horizontal/vertical lines

      $grid = $('<div></div>').css({
        position: 'absolute',
        height: containerHeight,
        width: containerWidth,
        zIndex: -1
      });

      // Horizontal lines

      if (settings.horizontal === true) {
        for (i = 0; i < settings.cols; i += 1) {
          $col = $('<div></div>').css({
            backgroundColor: settings.colColour,
            float: 'left',
            height: 'inherit',
            width: colWidth + '%'
          });
          // Only add margin-left to 2n elements
          if (i > 0) {
            $col.css({ marginLeft: gutterWidth + '%' });
          }
          $grid.append($col);
        }
      }

      // Vertical lines

      if (settings.vertical === true) {
        for (i = 1; i < baselines; i += 1) {
          $row = $('<div></div>').css({
            backgroundColor: settings.baselineColour,
            position: 'absolute',
            height: '1px',
            top: (i * baseline) + 'px',
            width: '100%'
          });
          $grid.append($row);
        }
      }

      $(this).prepend($grid);

    });

  };

}(jQuery));