import { useState } from 'react';

const LikeButton = () => {
  const bgColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const color = bgColor[count % bgColor.length];

  return (
    <div className="like-button">
      <button
        style={{ backgroundColor: color, color: 'white' }}
        onClick={handleClick}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
