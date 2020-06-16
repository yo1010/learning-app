import React, { Component } from 'react';
import HomePage from '../partials/HomePage/HomePage';
import './styles/Home.scss'


export default class Home extends Component {
    render() {
        return (
            <div class="home-view-container">
                <HomePage />
            </div>
        )
    }
}
