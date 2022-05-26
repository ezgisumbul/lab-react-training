import { useState } from 'react';
const ClickablePicture = (props) => {
  const [isClicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClicked);
  };

  const image = isClicked ? props.imgClicked : props.img;

  return (
    <div className="clickable-img">
      <img src={image} alt="" onClick={handleClick} />
      {/* <img src={props.img} alt="" /> */}
    </div>
  );
};

export default ClickablePicture;
