import React from 'react'
import lightbulbImage from '../../../static/assets/img/lightbulb-idea.png'
import "./styles/TopIntro.scss"

export default function TopIntro() {
    return (
        <div class="row top-intro-container">
            <div class="text-container col-12 col-md-6 col-lg-6">
                <div class="row mx-auto">
                    <h4 class="small-heading mx-auto">Innovate</h4>
                    <div class="circle mx-auto" />
                    <h4 class="small-heading mx-auto">Educate</h4>
                    <div class="circle mx-auto" />
                    <h4 class="small-heading mx-auto">Connect</h4>
                </div>
                <h1 class="top-heading"> Improve your learning and contribute to the community </h1>
                <h5 class="sub-heading"> Join us on our mission to improve the learning process and increase the accessibility of information across the industry</h5>
            </div>
            <div class="lightbulb-container ml-auto col-12 col-md-6 col-lg-6">
                <img src={lightbulbImage} class="lightbulb-image mx-auto row" alt="lightbulb" />
                <a href='https://www.freepik.com/free-photos-vectors/background' class="image-credit">Background vector created by freepik - www.freepik.com</a>
            </div>
        </div>
    )
}
