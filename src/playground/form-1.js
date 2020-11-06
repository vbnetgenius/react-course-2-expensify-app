const dataSource = {
    firstname: '',
    lastname: '',
};
const onFormSubmitted = (e) => {
    e.preventDefault();
    dataSource.firstname = e.target.elements.firstname.value;  
    dataSource.lastname = e.target.elements.lastname.value;    
};

const resetForm = () => {
    dataSource.firstname = '';
    dataSource.lastname = '';
    render();
};

const render = () => {
    const jsx = (
        <form onSubmit={onFormSubmitted}>
            <div><input type="text" name="firstname" /></div>            
            <div><input type="text" name="lastname" /></div>
            <button>Submit form</button>
        </form>
    );
    ReactDOM.render(jsx, document.getElementById("root"));
};

render();