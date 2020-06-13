import React, { Component } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import './styles/HowItWorks.scss'

export default class HowItWorks extends Component {
    render() {
        return (
            
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin indicator={true}>
                    <div class="how-container">
                        <div class="how-header row">
                            <div class="mx-auto my-5">
                                <h1 class="how-title">How it works</h1>
                            </div>
                        </div>
                        <div class="how-steps">
                            <div id="trigger" class="cards-row">
                                <div class="mx-auto my-5 col-12 col-md-6 col-lg-3">
                                    <div class="how-card" id="animate">
                                        <span>
                                            <h3> 1. </h3>
                                            <h5> Make an account and provide information about your learnning by following the steps </h5>
                                        </span>
                                    </div>
                                </div>
                                <div class="mx-auto my-5 col-12 col-md-6 col-lg-3">
                                    <div class="how-card">
                                        <span>
                                            <h3> 2. </h3>
                                            <h5> Use your personal visualized learning dashboard to keep track of your learning process </h5>
                                        </span>
                                    </div>
                                </div>
                                <div class="mx-auto my-5 col-12 col-md-6 col-lg-3">
                                    <div class="how-card">
                                        <span>
                                            <h3> 3. </h3>
                                            <h5> Log the progress of your learning to complete milestones and get tailored recommendations and suggestions on how to proceed </h5>
                                        </span>
                                    </div>
                                </div>
                                <div class="mx-auto my-5 col-12 col-md-6 col-lg-3">
                                    <div class="how-card">
                                        <span>
                                            <h3> 4. </h3>
                                            <h5> Recieve insights from unbiased analysis of the best practices and most important success factors pointed out by experienced professionals </h5>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
            </Controller>
        )
    }
}
