import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Navigation'

export default function index() {
    return (
       <Router>
        <Navigation />
       </Router>
    )
}
