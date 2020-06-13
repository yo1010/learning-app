import React from 'react'
import { Controller, Scene} from 'react-scrollmagic'
import "./styles/TopIntro.scss"
import TopIntro from './TopIntro'
import OurCompany from './OurCompany'

export default function EmptyScreen() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin indicator={true}>
                <div class="top-intro-container" />
            </Scene>
            <OurCompany />
        </Controller>
    )
}
