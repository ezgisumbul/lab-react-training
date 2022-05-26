const BoxColor = (props) => {
  function componentToHex(color) {
    var hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const hexColor = rgbToHex(props.r, props.g, props.b);
  const color = `rgb(${props.r},${props.g},${props.b})`;
  let textColor;
  if (props.r + props.g + props.b < (255 * 3) / 2) {
    textColor = 'white';
  } else {
    textColor = 'black';
  }

  return (
    <div
      className="box-color"
      style={{ backgroundColor: color, color: textColor }}
    >
      <p>{color}</p>
      <p>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
