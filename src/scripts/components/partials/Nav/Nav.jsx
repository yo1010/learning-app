import React, { Component } from 'react';
import './styles/Nav.scss';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand ml-5" href="#">Learn<span class="cyan">IFY</span></a>
                <span class="nav-beta" to="/">Beta Version</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ml-5">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Who we are</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">How it works</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/ourjourney">Our Journey</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <Link class="nav-link auth-link" to="/">Log In</Link>
                        <a class="nav-link auth-link" href="#">Join Now</a>
                    </ul>
                </div>
            </nav>
        )
    }
}
