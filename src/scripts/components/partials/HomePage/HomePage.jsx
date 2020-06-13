import React, { Component } from 'react'
import TopIntro from './TopIntro'
import OurCompany from './OurCompany'
import HowItWorks from './HowItWorks'
import SectionWipes from './SectionWipes'
import './styles/HomePage.scss'
import EmptyScreen from './EmptyScreen'

export default class HomePage extends Component {
    render() {
        return (
            <div class="home-container">
                <TopIntro />
                <EmptyScreen />
                <OurCompany />
                <HowItWorks />
                <SectionWipes />
            </div>
        )
    }
}
