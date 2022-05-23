const IdCard = (props) => {
  return (
    <div>
      <h4> First name:{props.firstName}</h4>
      <h4> Last name: {props.lastName}</h4>
      <h4> Gender: {props.gender}</h4>
      <h4> Height: {props.height / 100}m</h4>
      <h4> Birth: {props.birth.toDateString()}</h4>
    </div>
  );
};

export default IdCard;
