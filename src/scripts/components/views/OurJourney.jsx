import React from 'react'
import img from '../../static/assets/img/journey-timeline.jpg'
import './styles/OurJourney.scss'

export default function OurJourney() {
    return (
        <React.Fragment>
            <h1 class="journey-header mt-5">
                Our Journey
            </h1>
            <div class="journey-container mx-auto">
                <img src={img} alt="our journey" class="journey-image" />
                <a href='https://www.freepik.com/free-photos-vectors/infographic' class="image-credit">Infographic vector created by freepik - www.freepik.com</a>
            </div>
        </React.Fragment>
    )
}
