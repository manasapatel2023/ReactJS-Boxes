const Box = (props) => {
  //  Write your code here.
  const { text, color } = props;
  return (
    <div className={color}>
      <p className="par">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" color="small-bg" />
      <Box text="Medium" color="medium-bg" />
      <Box text="Large" color="large-bg" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
