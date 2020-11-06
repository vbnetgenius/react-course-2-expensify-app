const firstName = "siavsh";
const lastName = "ebrahimi";
const age = 27;

var app = {
  title: "Siavash Ebrahimi",
  subtitle: "A passionate programmer",
  detail: {
    firstName: "siavash",
    lastName: "ebrahimi",
    age: 27,
  },
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
    
  let option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);

    // Empty input field
    e.target.elements.option.value = "";
  }

  render();

};


const removeAllOptions = () => {
  // Reset source
  app.options = [];
  render();
};

const rootElement = document.getElementById("root");

const render = () => {
  var templateOne = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <button onClick={removeAllOptions}>Remove all options</button>
      <ol>
        {
          app.options.map(item => <li>{item}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>      
      </form>
    </div>
  );
  
  
  ReactDOM.render(templateOne, rootElement);
};

render();

