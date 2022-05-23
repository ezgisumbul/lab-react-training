const Greetings = (props) => {
  return (
    <div>
      <p>{props.lang === 'de' ? 'Hallo' : null}</p>
      <p>{props.lang === 'fr' ? 'Bonjour ' : null}</p>
      <p>{props.lang === 'en' ? 'Hello ' : null}</p>
      <p>{props.lang === 'es' ? 'Ola ' : null}</p>
    </div>
  );
};

export default Greetings;
