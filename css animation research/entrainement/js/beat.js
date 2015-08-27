var tz = Math.round( ( panelSize / 2 ) / 
  Math.tan( ( ( Math.PI * 2 ) / numberOfPanels ) / 2 ) );
// or simplified to
var tz = Math.round( ( panelSize / 2 ) / 
  Math.tan( Math.PI / numberOfPanels ) );