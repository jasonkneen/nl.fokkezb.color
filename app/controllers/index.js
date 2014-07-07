$.win.open();

function onChange(e) {
  console.debug(JSON.stringify(e, null, '  '));

  $.hex.applyProperties({
    text: e.hex,
    color: e.bw
  });

  $.win.backgroundColor = e.hex;
}