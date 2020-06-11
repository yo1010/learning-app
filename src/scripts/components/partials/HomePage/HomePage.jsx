import React, { Component } from 'react'
import TopIntro from './TopIntro'
import OurCompany from './OurCompany'
import HowItWorks from './HowItWorks'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <TopIntro />
                <OurCompany />
                <HowItWorks />
            </div>
        )
    }
}
