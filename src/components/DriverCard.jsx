import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <Rating className="driver-rating">{props.rating}</Rating>
        {props.car.model} - {props.car.licensePlate}
      </div>

      <div></div>
    </div>
  );
};

export default DriverCard;
