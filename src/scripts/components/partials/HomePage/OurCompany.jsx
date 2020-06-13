import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import "./styles/OurCompany.scss"
import AnimationTextRow from '../../shared/AnimationTextRow'


export default function OurCompany() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                    <div class="team-header row">
                        <div class="mx-auto">
                            <h1 class="team-title my-5">Who we are</h1>
                        </div>
                    </div>
                    <div class="team-messages mx-auto mb-5">
                        <AnimationTextRow duration={250} classToggle="animate-card" trigger="trigger" indicator={true}
                            text="We are passionate about what we do and are keen to change the way people learn by making information more accessible. "
                        />
                        <AnimationTextRow duration={250} classToggle="animate-card" trigger="trigger1"
                            text="We offer an integrated solution, where people can compare each other's learning process and experience. "
                        />
                        <AnimationTextRow duration={250} classToggle="animate-card" trigger="trigger2"
                            text="Through collecting important data and clever analysis we have a vision of being able to offer insights on best industry practices, best learning practices and a clear vision to achieving one's goals and making progress. "
                        />
                        <AnimationTextRow duration={250} classToggle="animate-card" trigger="trigger3"
                            text="We are passionate about what we do and are keen to change the way people learn by making information more accessible. "
                        />
                    </div>
            <Scene pin indicator={true}>
                <div class="team-container" />
            </Scene>
        </Controller>
    )
}
