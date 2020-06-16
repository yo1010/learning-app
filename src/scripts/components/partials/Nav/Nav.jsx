import React, { Component } from 'react';
import './styles/Nav.scss';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <Link class="navbar-brand ml-1" to="/">Learn<span class="cyan">IFY</span></Link>
                <span class="nav-beta" to="/">Beta Version</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ml-5">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#who-we-are">Who we are</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#how-it-works">How it works</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <Link class="nav-link auth-link" to="/">Log In</Link>
                        <Link class="nav-link auth-link" to="/">Join now</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}
