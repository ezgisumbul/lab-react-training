const selectRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Random = (props) => {
  return <h1>{selectRandom(props.min, props.max)}</h1>;
};

export default Random;
