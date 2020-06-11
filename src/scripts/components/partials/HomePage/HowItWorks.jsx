import React, { Component } from 'react'
import './styles/HowItWorks.scss'

export default class HowItWorks extends Component {
    render() {
        return (
            <div class="how-container">
                <div class="how-header row">
                    <div class="mx-auto my-5">
                        <h1 class="how-title">How it works</h1>
                    </div>
                </div>
                <div class="how-messages">
                    <div class="how-text row" data-aos="fade-right">
                        <div class="mx-auto my-5 how-paragraph">
                            We are passionate about what we do and are keen to change the way people learn by making information more accessible. 
                        </div>
                    </div>
                    <div class="how-text row" data-aos="fade-left">
                        <div class="mx-auto my-5 how-paragraph" data-aos="fade-left">
                            We offer an integrated solution, where people can compare each other's learning process and experience. 
                        </div>
                    </div>
                    <div class="how-text row">
                        <div class="mx-auto my-5 how-paragraph">
                            Through collecting important data and clever analysis we have a vision of being able to offer insights on best industry practices, best learning practices and a clear vision to achieving one's goals and making progress.
                        </div>
                    </div>
                    <div class="how-text row">
                        <div class="mx-auto my-5 how-paragraph">
                            We are passionate about what we do and are keen to change the way people learn by making information more accessible. 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
