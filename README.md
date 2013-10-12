# ashlar.js

A flexible jQuery plugin for generating horizontal and vertical baseline grids. Super-duper lightweight at 0.7kb. 

## Usage

At it's simplest ashlar.js can be used on any selector which you want to add horizontal or vertical guides to:

    jQuery('#wrapper').ashlar();

Though you'll probably want to change the dimensions to fit with your own design. All the options are passed in the standard way:

    jQuery('#wrapper').ashlar({
    	baseline: 21,
      cols: 16
    })
    
## Options

### baseline

Type: `Integer` Default: `24`

Space between vertical lines, typically the base font size multiplied by the line height e.g. 16 * 1.5 = 24

### baselineColour

Type: `String` Default: `#ddd`

Colour of the vertical grid; can be provided as a hex, color, rgb or rgba value

### cols

Type: `Integer` Default: `12`

Number of horizontal columns

### colColour

Type: `String` Default: `#eee`

Colour of the horizontal grid; can be provided as a hex, color, rgb or rgba value

### gutter

Type: `Integer` Default: `20`

Space between columns in pixels

### horizontal

Type: `Boolean` Default: `true`

Show the horizontal grid

### vertical

Type: `Boolean` Default: `true`

Show the vertical grid

## Browser Support

* Internet Explorer 8.0+
* Firefox 3.0+
* Safari 4.0+
* Chrome 14.0+
* Opera 10.0+

## Credits

Based on FlexBones by [roikles](http://github.com/roikles)