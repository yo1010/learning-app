import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

export default function AnimationTextRow({ duration, classToggle, text, trigger, indicator=false, triggerStyle={position: "relative", top: "-100px"} }) {
    return (
        <React.Fragment>
        <div id={trigger} style={triggerStyle}/>
            <Controller>
                <Scene duration={duration} classToggle={classToggle} triggerElement={`#${trigger}`} indicators={indicator}>
                    <div class="team-text row">
                        <div class="mx-auto my-5 team-paragraph">
                            {text}
                        </div>
                    </div>
                </Scene>
            </Controller>
        </React.Fragment>
    )
}
