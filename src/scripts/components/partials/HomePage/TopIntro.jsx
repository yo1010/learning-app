import React, { Component } from 'react'
import lightbulbImage from '../../../static/assets/img/lightbulb-idea.png'
import { Controller, Scene} from 'react-scrollmagic'
import "./styles/TopIntro.scss"



export default class TopIntro extends Component {
    render() {
        return (
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
                    <div class="top-intro-container">
                        <div class="pinned-container">
                            <div class="row mt-5 top-intro-row">
                                <div class="text-container col-12 col-md-6 col-lg-6">
                                    <div class="row mx-auto">
                                        <h4 class="small-heading mx-auto">Innovate</h4>
                                        <div class="circle mx-auto" />
                                        <h4 class="small-heading mx-auto">Educate</h4>
                                        <div class="circle mx-auto" />
                                        <h4 class="small-heading mx-auto">Connect</h4>
                                    </div>
                                    <h1 class="top-heading"> Visualize and understand your learning </h1>
                                    <h5 class="sub-heading"> We are on a mission to improve the learning process and increase the accessibility of information across the industry</h5>
                                    <button class="join-button mx-auto"><span>Join us on our mission</span> <i class="fas fa-users" /></button>
                                </div>
                                <div class="lightbulb-container ml-auto col-12 col-md-6 col-lg-6">
                                    <img src={lightbulbImage} class="lightbulb-image mx-auto row" alt="lightbulb" />
                                    <a href='https://www.freepik.com/free-photos-vectors/background' class="image-credit">Background vector created by freepik - www.freepik.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
            </Controller>
        )
    }
}
