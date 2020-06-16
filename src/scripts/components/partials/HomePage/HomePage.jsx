import React, { Component } from 'react'
import TopIntro from './TopIntro'
import OurCompany from './OurCompany'
import HowItWorks from './HowItWorks'
import './styles/HomePage.scss'

export default class HomePage extends Component {
    render() {
        return (
            <div class="home-container">
                <TopIntro />
                <OurCompany />
                <HowItWorks />
            </div>
        )
    }
}
