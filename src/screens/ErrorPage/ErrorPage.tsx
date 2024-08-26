import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // For custom styling

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">
                <button>Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;