import React, { Component } from 'react'
import TopIntro from './TopIntro'
import OurTeam from './OurTeam'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <TopIntro />
                <OurTeam />
            </div>
        )
    }
}
