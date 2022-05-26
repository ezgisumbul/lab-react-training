// const Greetings = (props) => {
//   return (
//     <div className="greetings">
//       <p>{props.lang === 'de' ? 'Hallo' : null} Ludwig</p>
//       <p>{props.lang === 'fr' ? 'Bonjour ' : null}</p>
//       <p>{props.lang === 'en' ? 'Hello ' : null}</p>
//       <p>{props.lang === 'es' ? 'Ola ' : null}</p>
//     </div>
//   );
// };

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;

    case 'fr':
      greeting = 'Bonjour';
      break;

    case 'es':
      greeting = 'Ola';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    default:
  }
  return (
    <div className="greetings">
      {greeting} {props.children}
    </div>
  );
};

export default Greetings;
