(function ($) {

  $.fn.ashlar = function (options) {

    // Should probably refactor naming structure, seems messy

    var settings = $.extend({
      baseline: 21,
      baselineColour: '#ddd',
      cols: 12,
      colColour: '#eee',
      gutter: 20
    }, options);

    return this.each(function () {

      var $container       = $(this),
        containerWidth     = $container.width(),
        containerHeight    = $container.height(),
        gutterWidth        = ((20 / (containerWidth + settings.gutter)) * 100),
        colWidth           = (100 / settings.cols) - gutterWidth + (gutterWidth / settings.cols),
        baselineSansBorder = (settings.baseline - 1),
        baselines          = Math.floor(containerHeight / settings.baseline),
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

      // Vertical lines

      for (i = 0; i < baselines; i += 1) {
        $row = $('<div></div>').css({
          borderBottom: 'solid 1px ' + settings.baselineColour,
          position: 'absolute',
          height: baselineSansBorder + 'px',
          top: (i * settings.baseline) + 'px',
          width: '100%'
        });
        $grid.append($row);
      }

      $(this).prepend($grid);

    });

  };

}(jQuery));