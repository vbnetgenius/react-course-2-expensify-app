class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Indecision app',
      subtitle: 'Put your life in the hands of computer',
      options: props.options,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const dataToSaved = JSON.stringify(this.state.options);
      localStorage.setItem("data", dataToSaved);
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("data");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ( { options: options } ));
      }  
    }  catch(e) {}
  }

  componentWillUnmount() {
    console.warn("Component will unmount");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ( 
      { 
        options: prevState.options.filter(o => o != option),
      } 
    ) );
  };

  handleAddOption = (newOptionText) => {

    if (!newOptionText) {
      return "Please enter option text";
    } else if ( this.state.options.indexOf(newOptionText) > -1 ) {
      return "This options is already exists !";
    }

    // Push new option into the state
    this.setState(() => ( 
        { 
          options: [...this.state.options,newOptionText,] 
        } 
      ) 
    );
  };

  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[randomIndex];
    alert(randomOption);
  };

  render() {
    const {title, subtitle, options} = this.state;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={options.length > 0} />
        <Options handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions} options={options} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );

  }
}

IndecisionApp.defaultProps = {
  options: ["Siavash Ebrahimi", "younes ebrahimi"],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {
        // Conditional Rendering
        props.subtitle
        &&
        <h2>{props.subtitle}</h2>
      }
    </div>
  );
};

Header.defaultProps = {
  title: 'Default title',
};

const Action = (props) => {
  const { hasOptions, handlePick } = props;
  return (
    <div>
      <button 
        onClick={handlePick} 
        disabled={!hasOptions}
      >
        What should i do ?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
      <div>
        {
          props.options.map(option => <Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option} />)
        }
      <button 
        disabled={props.options.length > 0 ? false : true}
        onClick={props.handleDeleteOptions}
      >
        Remove all options
      </button>
    </div>
 );
};


const Option = (props) => {
  return (
    <p>
      {props.optionText}
      <a href="#" style={{fontWeight: "bold", "color": "red"}} onClick={() => { props.handleDeleteOption(props.optionText); }}>
      Delete
      </a>
    </p>
  );
};


class AddOption extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  // Handle form submit
  handleAddOption = (e) => {
    e.preventDefault();
   
    let option = e.target.elements.option.value;
    const error = this.props.handleAddOption(option);

    if (error) {
      this.setState(() => ( { error  } ));    
      return;
    }

    // Reset inputs
    e.target.elements.option.value = "";

    this.setState(() => ( { error: '', } ));

  };

  render() {
    return (
      <form style={{marginTop: '10px'}} onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button type="submit">Add Option</button>
        {
          this.state.error
          &&
          <p style={{fontWeight: 'bold', color: 'red'}}>{this.state.error}</p>
        }
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));