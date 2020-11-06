class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
    }   

    handleVisible = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    };

    render() {
        let {visible} = this.state;
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisible}>{visible ? "Hide Detail" : "Show Detail"}</button>
                {
                    visible 
                    &&
                    <p>Siavash Ebrahimi is the great wordpress developer around the world</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));


// const app = {
//     title: 'Visibility',
//     status: 'none',
// };

// const toggleVisibility = () => {
//     app.status = app.status === 'none' ? 'block' : 'none';
//     // Re-render application
//     render();
// };


// const rootElement = document.getElementById("root");

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {app.visible ? 'Hide Detail' : 'Show Detail'}
//             </button>
//             <p style={{display: app.status}}>
//                 Siavash Ebrahimi is from iran, and a professional programmer
//             </p>
//         </div>
//     );
//     ReactDOM.render(template, rootElement);
// };

// render();

