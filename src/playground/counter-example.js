class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
  }

  handleIncreaseOne = () => {
    console.warn("Handle Increase One !");
    this.setState({count: this.state.count + 1,});
  };

  handleDecreaseOne = () => {
    console.warn("Decrease one !");
    this.setState({count: this.state.count - 1,});
  };

  handleReset = () => {
    console.warn("Reset !");
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button name="increase" onClick={this.handleIncreaseOne}>+</button>
        <button name="decrease" onClick={this.handleDecreaseOne}>-</button>
        <button name="reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter count={20} />, document.getElementById("root"));


// let count = 10;
// const addOne = () => {
//   ++count;
//   renderCounterApp();
// };
// const minusOne = () => {
//   --count;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateThree = (
//     <div>
//       <h1>Count : {count}</h1>
//       <button id="increment" className="button" onClick={addOne}>+</button>
//       <button id="decrement" className="button" onClick={minusOne}>-</button>
//       <button id="reset" className="button" onClick={reset}>-</button>
//     </div>
//   );
//   ReactDOM.render(templateThree, rootElement);
// };

// renderCounterApp();

