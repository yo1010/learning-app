import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import "./styles/OurCompany.scss"


export default function OurCompany() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
                <div class="team-container" id="who-we-are">
                    <div class="team-header">
                        <div class="mx-auto">
                            <h1 class="team-title my-3">Who we are</h1>
                        </div>
                    </div>
                    <div class="team-messages mx-auto mb-5">
                        <div class="team-text row">
                            <div class="mx-auto mt-5 team-paragraph">
                                We offer:
                                    <li>data visualization of learning process</li>
                                    <li>connection with other learners</li>
                                    <li>data insights into best practices by professionals</li>
                            </div>
                            <div class="mx-auto my-5 team-paragraph">
                                How you can help:
                                    <li>we want to hear about your difficulties in learning</li>
                                    <li>we want to get your feedback on the product we are creating</li>
                                    <li>we want to listen to any suggestions or features you might need to help your learning</li>
                            </div>
                            <div class="graphic-two" />
                        </div>
                        <button class="subscribe-btn">Subscribe to get involved <i class="fas fa-envelope" /></button>
                    </div>
                    <div class="graphic-container">
                        <div class="graphic" />
                        <div class="graphic-one" />
                    </div>
                </div>
            </Scene>
        </Controller>
    )
}
