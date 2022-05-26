const selectRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Random = (props) => {
  return (
    <div className="random">
      <h1>
        Random value between {props.min} and {props.max} =&gt;
        {selectRandom(props.min, props.max)}
      </h1>
    </div>
  );
};

export default Random;
