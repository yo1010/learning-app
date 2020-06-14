import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import "./styles/OurCompany.scss"
import AnimationTextRow from '../../shared/AnimationTextRow'


export default function OurCompany() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin indicator={true}>
                <div class="team-container">
                    <div class="team-header row">
                        <div class="mx-auto">
                            <h1 class="team-title my-5">Who we are</h1>
                        </div>
                    </div>
                    <div class="team-messages mx-auto mb-5">
                        <div class="team-text row">
                            <div class="mx-auto my-5 team-paragraph">
                                '' Through collecting important data and clever analysis we have a vision of being able to offer insights on best industry practices, best learning practices and a clear vision to achieving one's goals and making progress. ''
                            </div>
                        </div>
                    </div>
                    <div class="graphic-container">
                        <Controller>
                        <div id="trigger" class="trigger-one" />
                            <Scene duration={1000} classToggle="animation-graphic-one" triggerElement="trigger" indicators="true" >
                                <div class="graphic" />
                            </Scene>
                            <div class="graphic-one" />
                        </Controller>
                    </div>
                </div>
            </Scene>
        </Controller>
    )
}
