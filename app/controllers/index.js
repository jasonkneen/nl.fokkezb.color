var spectrum = 0;
var spectrums = ['ghsv', 'hsvg', 'hsv'];

$.win.backgroundColor = $.widget.color.hex;

$.hex.applyProperties({
  text: $.widget.color.hex,
  color: 'black'
});

$.win.open();

function onChange(e) {
  console.debug(JSON.stringify(e, null, '  '));

  $.hex.applyProperties({
    text: e.hex,
    color: e.bw
  });

  $.win.backgroundColor = e.hex;
}

function toggleSpace() {
  spectrum = (spectrum === spectrums.length - 1) ? 0 : spectrum + 1;

  $.widget.applyProperties({
    spectrum: spectrums[spectrum]
  });
}