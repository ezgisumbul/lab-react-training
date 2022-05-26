const Rating = (props) => {
  let count = Math.round(Number(props.children));
  return (
    <div className="rating">
      <div>{'★'.repeat(count) + '☆'.repeat(5 - count)}</div>
    </div>
  );
};

export default Rating;
