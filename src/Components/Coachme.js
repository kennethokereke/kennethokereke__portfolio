import '../Stylesheet/Coachme/Coachme.scss'
import React from 'react'
import {FiEye} from 'react-icons/fi'
import {FaClock, FaSearch, FaSlidersH,FaRegCalendarAlt} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'

//images
import mobilescreen from '../Images/coachme/mobilescreen.png'
import Coaches from '../Images/coachme/coachme.png'
import Coaches2 from '../Images/coachme/coachme2.png'
import Coaches3 from '../Images/coachme/coachme3.png'
import Coaches4 from '../Images/coachme/coachme4.png'
import Coaches5 from '../Images/coachme/coachme5.png'
import Coaches6 from '../Images/coachme/coachme6.png'
import Sketches from '../Images/coachme/sketches.png'
import TopBanner from './TopBanner'


 class Coachme extends React.Component {
    render() {
        return (
            <div className="Coachme" >
            <div className="innerWrapper1">
            <TopBanner bgColor="#ffeed6"  arrowColor="#151715"/>
               
                <div className="sectionContent1">

                

                <div className="Coach">
                <div className="section-titles">
                       <h2 className="section-head">Coachme</h2>
                       </div>

                       <p className="section-subheader">building technology to create music using AI — including
                     the ability to interpret video and automatically set music to it.</p>
                         
                    
                     
                     <div className="section_button">
                        

                            <a href="https://www.figma.com/proto/OEjroYK3BhrYDMob2WrVHJ/Coachme?node-id=226%3A7149&scaling=scale-down" target="_blank" role="button" className="viewPrototype">
                                <span className="button_content">
                                    <span className="button_icon_left">
                                    <FiEye size={25} color="#fff"  />
                                    </span>
                                    <span className="button-text" style={{color: 'white'}}>
                                        View Prototype
                                    </span>
                                </span>
                            </a>
                       
                         </div>

                         <div className="jukedeck_image_container">
                           <img src={mobilescreen}/>
                            
                         </div>


                         </div>

                         
                         




                    </div>


                    <div className="section" style={{backgroundColor:'#fff'}}>
                        <div className="sectionContent">

                        <div className="background_container">
                            <div className="Big">
                            <h4 className="Big_title">Background</h4>
                            </div>
                          
                            <div className="column-gap">
                                <div>
                                    <span className="icon_icon"><FaClock size={12} color="#000000AB"/></span>
                                    <span className="icon_text"> 1 month</span>
                                </div>
                                <div className="line">
                                   |
                                </div>
                               
                                <div className="icon-right">
                                    <span className="icon_icon"><FaTools size={12} color="#000000AB"/></span>
                                    <span className="icon_text"> Figma</span>
                                </div>
                               
                                
                            </div>

                            <div className="coachme_content">
                            Coachme Content Academy offers set of courses that help fitness coaches get more clients and leads.
                            </div>
                             <br/>
                            <div className="coachme_content">
                            The goal of this project was to design a mobile and web app that’ll deliver the courses, provide messaging options for customer support and encourage users to book a call 
                            with the client for higher ticket courses and personal coaching.
                            </div>

                        </div>


                        </div>
                    </div>


                    <div className="section" style={{backgroundColor:'#ffeed6'}}>
                        <div className="sectionContent">

                        <div className="content_center">
                      <div className="title_container">
                      <h4 className="titles_container">Problem</h4>
                      </div>
                  <div className="content_container">
                  Music is an art form that takes years to master.  It is hard for new artists
                   to make music that sounds professional. Working with professionals with
                    industry experience can really help new artists create better music. But,
                     finding collaborators and music professionals and working with them is
                      intimidating as well as hard when you are a new artist with limited budget
                       and reach.
                   
                    

                  </div>
                   

                    </div>
                            </div>
                            </div>

                            <div className="section" style={{backgroundColor:'#fff'}}>
                        <div className="sectionContent">
                        <div className="container-row">
                  <div className="title-row">
                 <h2 className="title-research">Scoping it out</h2>
                  </div>
                  <div className="content-row">
                    
                  The client wanted to finish designing and finishing touches before 2 weeks and
                   start developing the apps as soon as possible in order to meet the launch
                    deadlines. We decided to handle user accounts and subscription externally.
                     That helped us narrow down the project’s scope and focus on the core goals
                      which were delivering courses and support. We also decided to have our own
                       UI language rather than following platform based UI guidelines. That helped
                        us have a unique and unified experience across all platforms. 
                    

                  </div>
                  <div className="content-rows">
                  Once we had defined the project’s scope, I discussed with the client to define our MVP.
                  We decided to have the following features in our MVP:
                  </div>

                  <div className="list-row">
                    <ul className="list-row">
                    <li className="icon-list-item">
                      <span className="iconss"><FaSearch  size={12} color="black"/></span>
                      <span className="icon-list-title">Browsing</span> <br/>
                      <span className="icon-list-text">
                      Allowing users to browse the courses and contents.                      </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaRegCalendarAlt size={12} color='black'/></span>
                      <span className="icon-list-title">High Ticket Sale</span> <br/>
                      <span className="icon-list-text">
                      Encourage users to schedule calls for consulting and buying premium courses.

                        </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><BiMessageDetail size={12} color="black"/></span>
                      <span className="icon-list-title">Messaging</span> <br/>
                      <span className="icon-list-text">
                      Helping users message the client in case they have any questions.

                      </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaSlidersH  size={12} color="black"/></span>
                      <span className="icon-list-title">Profile & Settings</span> <br/>
                      <span className="icon-list-text">
                      Helping users to edit their profiles and change subscription settings.

                      </span>
                    </li>
                    </ul>

                  </div>
                 </div>




                            </div>
                            </div>


                            <div className="section" style={{backgroundColor:'#fff'}}>
                        <div className="sectionContent">


                        <div className="content_center">
                      <div className="title_container">
                      <h4 className="titles_container">Sketches</h4>
                      </div>
                  <div className="content_container">
                  After defining the MVP, I started sketching so I could quickly brainstorm
                   different solutions and iterate them. Since we had to finish the project in
                    very little time, sketching allowed me to test a lot of ideas without wasting
                     much time on visual design.
                   
                    

                  </div>

                  <div className="content_container">
                  Here are some of the sketches that I came up with:
                   Please do not laugh at my drawing 😭
                  </div>

                  <div className="sketch-container">
                      <img src={Sketches}/>
                  </div>
                   

                    </div>

                            </div>
                            </div>


                            <div className="section" style={{backgroundColor:'#f6f1ea'}}>
                        <div className="sectionContent">
                            <div className="design-content">
                                <div className="design-title">
                                    <h2 className="design-header">
                                        Designing
                                    </h2>
                                </div>

                                <div className="design-desc">
                                    
                                    Sketching provided me with clear idea of features and direction
                                     that we needed to go to. So, I started prototyping in Figma and
                                      came up with these designs. We decided on dark theme with orange
                                       as our primary colour as these were the existing brand colours.
                                    

                                </div>


                                <div className="section_button">
                        
                        <a href="https://www.figma.com/proto/OEjroYK3BhrYDMob2WrVHJ/Coachme?node-id=226%3A7149&scaling=scale-down" target="_blank" role="button" className="viewPrototype">
                            <span className="button_content">
                                <span className="button_icon_left">
                                <FiEye size={25} color="#fff"  />
                                </span>
                                <span className="button-text">
                                    View Prototype
                                </span>
                            </span>
                        </a>
                   
                     </div>

                            <div className="app-design">
                            <div className="left-number-1">
                                <div className="circle-container">
                                    <div className="circle">
                                        <h2 className="circle-title">1</h2>
                                    </div>
                                </div>

                                <div className="circle-desc">
                                    <h2 className="circle-header">Home Screen</h2>
                                </div>
                                
                                <div className="circle-content">
                                Home screen was one of the most important part of the app as this is where
                                 a new user would land. We wanted to make sure we presented the information
                                  in a clean and scannable layout and also encourage serious users to
                                   schedule a call for high ticket courses and consulting services.
                                </div>


                            </div>

                            <div className="right-side-content">
                                <img src={Coaches} className="imagess"/>
                            </div>


                            </div>

                            <div className="app-design">
                            <div className="left-number-1">
                                <div className="circle-container">
                                    <div className="circle">
                                        <h2 className="circle-title">2</h2>
                                    </div>
                                </div>

                                <div className="circle-desc">
                                    <h2 className="circle-header">Course Screen</h2>
                                </div>
                                
                                <div className="circle-content">
                                Course page provides information about the course like description, 
                                duration, price and modules and videos included in the course to give
                                 the user an overview of what to expect in the course before subscribing.
                                </div>


                            </div>

                            <div className="right-side-content">
                            <img src={Coaches2} className="imagess"/>
                            </div>


                            </div>


                            <div className="app-design">
                            <div className="left-number-1">
                                <div className="circle-container">
                                    <div className="circle">
                                        <h2 className="circle-title">3</h2>
                                    </div>
                                </div>

                                <div className="circle-desc">
                                    <h2 className="circle-header">Premium Content Popup</h2>
                                </div>
                                
                                <div className="circle-content">
                                Once the user has seen the course contents and read about
                                 what is being offered, we decided to bring up the premium
                                  content pop up when the user taps on any of the lessons.
                                </div>


                            </div>

                            <div className="right-side-content">
                            <img src={Coaches3} className="imagess"/>
                            </div>


                            </div>


                            <div className="app-design">
                            <div className="left-number-1">
                                <div className="circle-container">
                                    <div className="circle">
                                        <h2 className="circle-title">4</h2>
                                    </div>
                                </div>

                                <div className="circle-desc">
                                    <h2 className="circle-header">Lesson Screen</h2>
                                </div>
                                
                                <div className="circle-content">
                                Once subscribed, the user can watch video lessons using 
                                lessons page. It also shows any attachments that the lesson
                                 might have. If the users have any trouble or questions, 
                                 they can ask questions to the instructor.
                                </div>


                            </div>

                            <div className="right-side-content">
                            <img src={Coaches4} className="imagess"/>
                            </div>


                            </div>

                            <div className="app-design">
                            <div className="left-number-1">
                                <div className="circle-container">
                                    <div className="circle">
                                        <h2 className="circle-title">5</h2>
                                    </div>
                                </div>

                                <div className="circle-desc">
                                    <h2 className="circle-header">Other Screens</h2>
                                </div>
                                
                                <div className="circle-content">
                                These are the other screens that were part of the design.
                                </div>


                            </div>

                            <div className="right-side-content">
                            <img src={Coaches5} className="imagebg"/>
                            </div>


                            </div>
                     


                            </div>


                            </div>
                            </div>


                           
                            <div className="section" style={{backgroundColor:'#ffecd6'}}>
                                <div className="sectionContent">

                                    <div className="webdesign">
                                        <div className="web-title">
                                            <h2 className="web-header">
                                                Web App Design
                                            </h2>
                                        </div>

                                        <div className="web-content">
                                        After finalizing the mobile app, I started designing web app. With
                                         web app, our main goal was providing unified experience no matter which
                                          platform the user is currently on. That’s why I started with mobile first
                                           approach and it helped us maintain a unfirom experience in web as well as
                                            responsive version.
                                        </div>

                                        <div className="section_button">
                        

                        <a href="https://www.figma.com/proto/OEjroYK3BhrYDMob2WrVHJ/Coachme?node-id=301%3A614&scaling=min-zoom" target="_blank" role="button" className="viewPrototype">
                            <span className="button_content">
                                <span className="button_icon_left">
                                <FiEye size={25} color="#fff"  />
                                </span>
                                <span className="button-text">
                                    View Web Prototype
                                </span>
                            </span>
                        </a>
                   
                     </div>

                     <div className="section_button">
                        

                        <a href="https://www.figma.com/proto/OEjroYK3BhrYDMob2WrVHJ/Coachme?node-id=226%3A7149&scaling=scale-down" target="_blank" role="button" className="viewPrototype">
                            <span className="button_content">
                                <span className="button_icon_left">
                                <FiEye size={25} color="#fff"  />
                                </span>
                                <span className="button-text">
                                    View Reponsive Prototype
                                </span>
                            </span>
                        </a>
                   
                     </div>

                     <div className="image-contents">
                        <img src={Coaches6} className="imagess" />
                     </div>


                                    </div>
                                </div>
                            </div>


                        <div className="section">
                            <div className="sectionContent">

                                <div className="result">
                                    <div className="result-title">
                                        <h2 className="result-tit">Results</h2>
                                    </div>

                                    <div className="result-content">

                                    We were able to meet the deadline and we are currently 
                                    working with the developer to build the mobile and web app.
                                     This biggest thing that this project taught me is creating 
                                     a unified experience across all platforms. It also taught
                                      me about scoping out and prioritising the absolutely necessary 
                                      features for the MVP to be able to ship the project quickly.
                                    </div>

                                    <div className="result-content-2">
                                    Thank you for reading this case study. I hope this gave you
                                     an insight into my workflow. And most importantly, I hope you
                                      have an amazing day / night ahead. 😃
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="sectionContent2">

                                <div className="footer-content">
                                    <span className="foot-header">
                                    Copyright © 2021. Designed by <a href="https://www.linkedin.com/in/kenneth-okereke-8a0b1991/" target="_blank">Kenneth Okereke</a>
                                    </span>
                                </div>

                                </div>
                        </div>


















                </div>

            </div>
   
        )
    }
}

export default Coachme;

