import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is a private info , please do not share !</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { false === props.isAuthenticated && <p>Please login/register for viewing this content</p> }
            { true  === props.isAuthenticated && <WrappedComponent {...props}  /> }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="siavash ebrahimi" />, document.getElementById('root'));