(function ($) {

  $.fn.ashlar = function (options) {

    var settings = $.extend({
      baseline: 21,
      cols: 10,
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

      $grid = $('<div></div>').css({
        position: 'absolute',
        height: containerHeight,
        width: containerWidth,
        zIndex: -1
      });

      for (i = 0; i < settings.cols; i += 1) {
        $col = $('<div></div>').css({
          backgroundColor: '#eee',
          float: 'left',
          height: 'inherit',
          width: colWidth + '%'
        });
        if (i > 0) {
          $col.css({ marginLeft: gutterWidth + '%' });
        }
        $grid.append($col);
      }

      for (i = 0; i < baselines; i += 1) {
        $row = $('<div></div>').css({
          borderBottom: 'solid 1px #ddd',
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

  $('#wrapper').ashlar({cols: 12});

}(jQuery));