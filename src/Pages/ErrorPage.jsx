
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ErrorPage() {
    const location = useLocation();

    return (
        <div className="error-page">
            <h1>Ooops!</h1>
            <p>Something went wrong</p>
            <p className="error-status">Error {location.state ? location.state.status : '404'}</p>
            <p className="error-status-text"><i>{location.state ? location.state.statusText : 'Not Found'}</i></p>
            <p>Go to <Link to="/"><b>Home Page</b></Link></p>
        </div>
    );
}

export default ErrorPage;
