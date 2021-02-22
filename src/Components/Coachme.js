import '../Stylesheet/Coachme/Coachme.scss'
import React from 'react'
import {FiEye} from 'react-icons/fi'
import {FaClock, FaSearch, FaSlidersH,FaRegCalendarAlt} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'


 class Coachme extends React.Component {
    render() {
        return (
            <div className="Coachme" >
            <div className="innerWrapper1">
               
                <div className="sectionContent1">

                

                <div className="Coach">
                <div className="section-titles">
                       <h2 className="section-head">Coachme</h2>
                       </div>

                       <p className="section-subheader">building technology to create music using AI — including
                     the ability to interpret video and automatically set music to it.</p>
                         
                    
                     
                     <div className="section_button">
                        

                            <a href="https://www.figma.com/proto/GxalNlw1AytXlWRFhN2nzG/JukeDeck?node-id=335%3A10575&scaling=min-zoom" target="_blank" role="button" className="viewPrototype">
                                <span className="button_content">
                                    <span className="button_icon_left">
                                    <FiEye size={25} color="#000000"  />
                                    </span>
                                    <span className="button-text" style={{color: 'white'}}>
                                        View Prototype
                                    </span>
                                </span>
                            </a>
                       
                         </div>

                         <div className="jukedeck_image_container">
                            coachme picture
                            
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

                            <div className="jukedeck_content">
                            Coachme Content Academy offers set of courses that help fitness coaches get more clients and leads.
                            </div>
                             <br/>
                            <div className="jukedeck_content">
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
                      <span className="icon-list-title">Browsing</span>
                      <span className="icon-list-text">
                      Allowing users to browse the courses and contents.                      </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaRegCalendarAlt size={12} color='black'/></span>
                      <span className="icon-list-title">High Ticket Sale</span>
                      <span className="icon-list-text">
                      Encourage users to schedule calls for consulting and buying premium courses.

                        </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><BiMessageDetail size={12} color="black"/></span>
                      <span className="icon-list-title">Messaging</span>
                      <span className="icon-list-text">
                      Helping users message the client in case they have any questions.

                      </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaSlidersH  size={12} color="black"/></span>
                      <span className="icon-list-title">Profile & Settings</span>
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
                   
                  </div>

                  <div className="sketch-container">
                      <p>Images sketches</p>
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
                                    <p>
                                    Sketching provided me with clear idea of features and direction
                                     that we needed to go to. So, I started prototyping in Figma and
                                      came up with these designs. We decided on dark theme with orange
                                       as our primary colour as these were the existing brand colours.
                                    </p>

                                </div>


                                <div className="section_button">
                        
                        <a href="https://www.figma.com/proto/GxalNlw1AytXlWRFhN2nzG/JukeDeck?node-id=335%3A10575&scaling=min-zoom" target="_blank" role="button" className="viewPrototype">
                            <span className="button_content">
                                <span className="button_icon_left">
                                <FiEye size={25} color="#000000"  />
                                </span>
                                <span className="button-text">
                                    View Prototype
                                </span>
                            </span>
                        </a>
                   
                     </div>


                            </div>


                            </div>
                            </div>


















                </div>

            </div>
   
        )
    }
}

export default Coachme;

