const Job = (props) => {
  return (
    <div className={props.className}>
      <p>{props.title}</p>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
