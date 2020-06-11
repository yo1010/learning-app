import React from 'react'
import "./styles/OurCompany.scss"


export default function OurCompany() {
    return (
        <div class="team-container">
            <div class="team-header row">
                <div class="mx-auto">
                    <h1 class="team-title my-5">Who we are</h1>
                </div>
            </div>
            <div class="team-messages mx-auto">
                <div class="team-text row" data-aos="fade-right">
                    <div class="mx-auto my-5 team-paragraph">
                        We are passionate about what we do and are keen to change the way people learn by making information more accessible. 
                    </div>
                </div>
                <div class="team-text row" data-aos="fade-left">
                    <div class="mx-auto my-5 team-paragraph" data-aos="fade-left">
                        We offer an integrated solution, where people can compare each other's learning process and experience. 
                    </div>
                </div>
                <div class="team-text row">
                    <div class="mx-auto my-5 team-paragraph">
                        Through collecting important data and clever analysis we have a vision of being able to offer insights on best industry practices, best learning practices and a clear vision to achieving one's goals and making progress.
                    </div>
                </div>
                <div class="team-text row">
                    <div class="mx-auto my-5 team-paragraph">
                        We are passionate about what we do and are keen to change the way people learn by making information more accessible. 
                    </div>
                </div>
            </div>
        </div>
    )
}
