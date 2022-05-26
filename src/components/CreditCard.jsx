import visa from './../assets/images/visa.png';
import masterCard from './../assets/images/master-card.svg';

const CreditCard = (props) => {
  const lastFour = props.number.slice(-4);
  const hidden = ('•'.repeat(4) + ' ').repeat(3) + lastFour;

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div>
        <img src={props.type === 'Visa' ? visa : masterCard} alt="" />
      </div>
      <p id="card-number">{hidden}</p>
      <div>
        <div id="card-details">
          <p>
            Expires{' '}
            {props.expirationMonth < 10
              ? '0' + props.expirationMonth
              : props.expirationMonth}
            /{props.expirationYear % 1000}
          </p>
          <p>{props.bank}</p>
        </div>
        <div>{props.owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
