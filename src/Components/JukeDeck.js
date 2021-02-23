import React, {Component} from 'react';
import { SRLWrapper } from "simple-react-lightbox";

import TopBanner from './TopBanner';

//imgage
import JukeDeckImage from '../Images/jukedeck/cover.png'
import JukePersona1 from '../Images/jukedeck/Persona1.png'
import JukePersona2 from '../Images/jukedeck/persona2.png'
import Lowfi from '../Images/jukedeck/lowfi.png'
import Homepage from '../Images/jukedeck/Home.png'
import Search from '../Images/jukedeck/SearchResults.png'
import Individual from '../Images/jukedeck/Beats.png'
import Profile from '../Images/jukedeck/ProfilePage.png'


import StyleGuide from '../Images/jukedeck/color-style.png'
import TypographyGuide from '../Images/jukedeck/typograpghy.png'
import ButtonGuide from '../Images/jukedeck/buttons.png'
import InputGuide from '../Images/jukedeck/input.png'

//videos
import Registration from '../Images/jukedeck/registration.mov'
import OnBoaridng from '../Images/jukedeck/onbaording.mov'
import Product from '../Images/jukedeck/Products.mov'
import Uploading from '../Images/jukedeck/uploading.mov'
import Mobile from '../Images/jukedeck/mobile.mov'

//icons
import {FiEye} from 'react-icons/fi'
import  {FaClock} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {FaExclamationCircle} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaUpload} from 'react-icons/fa'
import {FaCartArrowDown} from 'react-icons/fa'




import '../Stylesheet/JukeDeck/JukeDeck.scss';

class JukeDeck extends Component {
   render() {
      return (
         <div className="JukeDeck">
            <div className="innerWrapper1">
            <TopBanner bgColor="#bff2e2"  arrowColor="#151715"/>
           
             <div className="section1">
               <div className="sectionContent1">
               
                 
                     <div className="Jukee">
                       <div className="section-titles">
                       <h2 className="section-head">What is JukeDeck?</h2>
                       </div>
                    
                        
                     
                      <p className="section-subheader">building technology to create music using AI — including
                     the ability to interpret video and automatically set music to it.</p>
                         
                    
                     
                     <div className="section_button">
                        

                            <a href="https://www.figma.com/proto/GxalNlw1AytXlWRFhN2nzG/JukeDeck?node-id=335%3A10575&scaling=min-zoom" target="_blank" role="button" className="viewPrototype">
                                <span className="button_content">
                                    <span className="button_icon_left">
                                    <FiEye size={25} color="#000000" color="#ffff" />
                                    </span>
                                    <span className="button-text" style={{color: 'white'}}>
                                        View Prototype
                                    </span>
                                </span>
                            </a>
                       
                         </div>
                         </div>

                         <div className="jukedeck_image_container">
                            <img src={JukeDeckImage}
                            />
                         </div>
                    

                   
                  

                   


                  
               </div>
             </div>

             <div className="section"  style={{backgroundColor: '#ffff'}}>
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
                            JukeDeck is a business which helps music producers, artists and 
                            lyricists implement their music in music videos by using artificial intelligence.
                            JukeDeck wanted to create an application that helps music producers, artists and lyricists create better music by providing them access to demos and starting points created by professionals.
                            </div>
                             <br/>
                            <div className="jukedeck_content">
                            The goal of this project was to design a website to represent the business and user interface 
                            for its users to search and upload demos.
                            </div>

                        </div>

                     </div>

                   </div>

             <div className="section" style={{backgroundColor: '#1a1a1a'}}>
               <div className="sectionContent" >
               <div className="small_content">
               It is no secret that artists are collaborating now more than ever. Almost every song that
                we currently hear on the radio is a collaborative effort of multiple producers, 
                songwriters and artists coming together to create the hit. Collaboration doesn’t 
                just help the artists make better music but it also helps them tap into audiences of 
                other collaborators. Hence, it is a key factor in a lot of hit music that we hear today.
               
               </div>
                       


                     </div>
                     </div>



             <div className="section" style={{backgroundColor: '#bff2e2'}}>
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

               <div className="section">
               <div className="sectionContent">
                 <div className="container-row">
                  <div className="title-row">
                 <h2 className="title-research">Research</h2>
                  </div>
                  <div className="content-row">
                    
                    I conducted interviews with 5 musicians to figure out pain points that 
                    they might have had. Here’s what I found:    
                    

                  </div>
                  <div className="list-row">
                    <ul className="list-row">
                    <li className="icon-list-item">
                      <span className="iconss"><FaExclamationCircle size={12} color="black"/></span>
                      <span className="icon-list-text">
                      It was hard for new artists to find high quality beats and lyrics to work with.
                      </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaExclamationCircle size={12} color='black'/></span>
                      <span className="icon-list-text">
                      Reaching out to professional musicians for collaboration is hard due to small audience.
                        </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaExclamationCircle size={12} color="black"/></span>
                      <span className="icon-list-text">
                      A lot of musicians that they'd worked with lacked professionalism and seriousness.
                      </span>
                    </li>
                    <li className="icon-list-item">
                      <span className="iconss"><FaExclamationCircle size={12} color="black"/></span>
                      <span className="icon-list-text">
                      Releasing collaborative music required long time as they had to get permission for clearance.
                      </span>
                    </li>
                    </ul>

                  </div>
                 </div>

               </div>
               </div>

               <div className="section">
               <div className="sectionContent">
                 <div className="section-row">
                   <div className="title-rowss">
                     <h2 className="title-row2">User Personas</h2>
                   </div>
                  <div className="content-row2">
                    
                    Based on the research, I came up with two personas
                     describing the users that we were trying to help.
                  

                  </div>
                  <div className="persona-row">
                    <div className="persona1-row">
                      <img src={JukePersona1}/>

                    </div>

                    <div className="persona2-row">
                    <img src={JukePersona2}/>
                    </div>

                  </div>
                 </div>

               </div>
               </div>

               <div className="section">
               <div className="sectionContent">
                 <div className="column-content">
                  <div className="description-title">
                    <h2 className="header-content">
                      Scoping out of the MVP
                    </h2>
                  </div>
                  <div className="description-content">
                  Once I was done with the personas and had the idea of the problem 
                  that I wanted to solve, I discussed with the client to define our MVP. 
                  We decided to have the following features in our MVP:
                  </div>

                  
                    <div className="content-sm-container">
                      <ul className="list-item-container">
                        <li className="list-item">
                          <span>
                            <FaSearch size={12}/>
                          </span>
                          <span className="left-side">
                            Demo Browsing:
                            
                            Allow users to search and browse demos of beats/lyrics/songs.
                          </span>
                        </li>
                        <li className="list-item">
                        <span>
                            <FaUserAlt size={12} />
                          </span>
                          <span className="left-side">
                            User Profiles:
                            
                            Allow users to edit their profiles and details.
                          </span>
                        </li>
                        <li className="list-item">
                        <span>
                           <FaUpload size={12}/>
                          </span>
                          <span className="left-side">
                            Demo Uploads:
                            
                            Allow users to upload their own demo.
                          </span>
                        </li>
                        <li className="list-item">
                        <span>
                           <FaCartArrowDown size={12}/>
                          </span>
                          <span className="left-side">
                            Checkout:
                          
                            Allow users to purchase demos.
                          </span>
                        </li>
                      </ul>
                    </div>
                  



                  <div>

                  </div>
                 </div>
                 </div>
                 </div>
                
                 <div className="section" style={{backgroundColor: '#e5e5e5'}}>
               <div className="sectionContent">
                 <div className="wireframe-container">
                   <div>
                     <h2 className="wireframe">Wireframing</h2>
                   </div>

                   <div className="content-wireframe">
                   Once we discussed and decided on the MVP, I got started with the wireframe of the project.
                   </div>

                   <div className="wireframing-image">
                     {/* wireframing photo */}
                     <img src={Lowfi}/>

                   </div>

                 </div>

                 </div>
                 </div>
               
                 <div className="section" style={{backgroundColor: '#111'}}>
               <div className="sectionContent">
                 <div className="styleguilde">
                   <div className="style-title">
                     <h2 className="style-p">Style Guide</h2>
                   </div>

                   <div className="style-guide-content">
                   The wireframing allowed me to focus on the information flow and goals of 
                   the project without being nitpicky about visual details like colors and 
                   typography. Now, it was time to create a style guide to ensure our layout
                    and style stayed consistent.We decided to go with dark theme and teal
                     as our brand colour. Here’s the style guide I came up with:
                   </div>

                   <div className="styleguide-content">
                    <img src={StyleGuide}/>

                   </div>

                   <div className="typography">
                     <img src={TypographyGuide}/>

                   </div>

                   <div className="Button">
                     <img src={ButtonGuide}/>
                   </div>

                   <div className="Input">
                     <img src={InputGuide}/>
                   </div>

                 </div>

                 </div>
                 </div>

                 <div className="section" style={{backgroundColor: '#e2efed'}}>
               <div className="sectionContent">
                 <div className="Design-cotent">
                   <div className="design-title">
                     <h2 className="design-headerr">The Design</h2>
                   </div>

                 </div>
                 <div className="design-content-des">
                 Now, it was time for the part I love the most, prototyping. 
                 Here are some of the screens that I came up with:

                 </div>
                 <div className="design-circle">
                   <div className="design-circle-content">
                      <h2 className="design-content">
                        1
                      </h2>
                   </div>

                 </div>

                 <div className="design-title">
                   <h2 className="heading-designg">
                     Home Page
                   </h2>
                 </div>

                 <div className="design-image">
                  <img src={Homepage}/>
                 </div>

                 <div className="section-design">
                    <div className="design-row1"> 
                    
                      
                        <div className="wrapping-content">

                          <div className="circular2">
                            <div className="circular-content2">
                            <h2 className="heading-title-element">
                                2
                            </h2>
                            </div>
                            </div>
                           
                          
                            <div >
                              <h2 className="register">Registration</h2>

                            </div>
                            <div className="register-content">
                            
                            The registration process takes the user through selecting
                             the account type, filling their details, choosing a subscription
                              and paying for it.
                            
                            </div>



                          



                       
                      </div>

                    
                    
                      

                      <div className="video-element">
                        <div className="video-wrapper"> 
                        <div className="video">
                        <video
                      
                       className="video1"
                       autoPlay
                       loop
                       playsInline
                       muted
                     >
                       <source src={Registration} type="video/mp4" />
                       Your browser does not support videos :(
                     </video>
                        </div>
                        </div>
                      </div>
                      </div>
                      </div>



                   

               
               
               <div className="section-onboarding">
                 <div className="onboarding-container">

                  
                   <div className="onbaording-3">
                     <div className="onbaording-column-wrap"> 
                        <div className="onbaording-widget"> 
                        

                        <div className="onbaording-circle"> 
                        <div className="onbaording-circle-container">
                          <h2 className="heading-onbaording"> 3</h2>
                        </div>
                        </div>


                        <div className="onbaording-header-3"> 
                          <div className="header-onboarding-container">
                          <h2 className="title-onbaording">
                            Onboarding
                          </h2>
                          </div>
                        </div>

                        <div className="onboarding-description"> 
                        <div className="onbaording-desc"> 
                        Instead of giving the users an empty profile, we introduced an 
                        onboarding process to give them a populated profile from the start.

                        </div>
                        </div>


                        
                        </div>
                        </div>
                        </div>

                        <div className="column-onboarding">
                     <div className="column-wrap-onbarding">
                        <div className="onboarding-element">
                          


                      <div className="video-element">
                        <div className="video-wrapper"> 
                        <div className="video">
                        <video
                      
                       className="video1"
                       autoPlay
                       loop
                       playsInline
                       muted
                     >
                       <source src={OnBoaridng} type="video/mp4" />
                       Your browser does not support videos :(
                     </video>
                        </div>
                        </div>
                      </div>

                        </div>
                     </div>
                   </div>




               </div>
               </div>
                        {/* end */}

                        <div className="section-uploading"> 
                          <div className="uploading-container"> 

                          <div className="upload-music"> 
                          <div className="upload-wrap">
                            <div className="upload-wrapper"> 

                            <div className="upload-circle"> 
                            <div className="upload-container-circle"> 
                              <h2 className="upload-title">4</h2>
                            </div>
                            </div>

                            <div className="upload-title"> 
                            <h2 className="upload-title-title"> Uploading music </h2>
                            </div>

                            <div className="uploading-desc">
                              <div className="upload-container"> 
                              Once the users get into their profile, they can upload their work
                               so potential collaborators can find and check their music.
                              </div>
                              
                               </div>


                            </div>
                          </div>
                          </div>

                          <div className="uploading-image">
                            <div className="image-upload-wrap"> 
                            <div className="image-wrap"> 


                      <video
                      
                      className="video1"
                      autoPlay
                      loop
                      playsInline
                      muted
                    >
                      <source src={Uploading} type="video/mp4" />
                      Your browser does not support videos :(
                    </video>



                           






                            </div>
                            </div>

                          </div>



                          </div>
                        </div>

                        <div className="search-resulta">
                          <div className="search-container"> 
                          <div className="search-padding">

                            <div className="search-circular"> 
                            <div className="search-circular-container"> 
                            <h2 className="heading-search">5</h2>
                            </div>
                            </div>

                            <div className="search-header"> 
                            <div className="search-sm-container"> 
                            <h2 className="search-title">
                            Search Results
                            </h2>
                            </div>
                            </div>

                            <div className="search-desc"> 
                            Once the user searches for a demo, they get sent to search 
                            results screen. It allows them to preview the music and add
                             it to their cart if they want to purchase it. Additionally, it
                              also allows the users to visit the individual track’s and author’s page.
                            </div>

                            <div className="search-image"> 
                            <img src ={Search}/>

                            </div>




                          </div>

                          </div>
                        </div>


                        <div className="section-individual-page">
                       <div className="individual-container"> 
                       <div className="individual-padding" > 
                       
                        <div className="individual-circle"> 
                        <div className="individual-circle-container"> 
                        <h2 className="individual-label">6</h2>
                        </div>
                        </div>

                        <div className="individual-title"> 
                        <h2 className="individual-heading">
                        Individual Track Page
                        </h2>
                        </div>

                        <div className="individual-desc"> 
                        On individual track page, users can preview the music and get additional information about 
                        if like the tempo and key. It also allows them to add it to the cart if they like it.
                        We also display the author’s details, short bio and related tracks to give the user information about the author.
                        </div>

                        <div className="individual-image"> 

                        <img src={Individual}/>
                        </div>

                       </div>
                       </div>
                        </div>

                        <div className="profile-section">
                        <div className="profile-container">
                          <div className="profile-padding"> 

                            <div className="profile-circle"> 
                            <div className="profile-circle-container"> 
                            <h2 className="profile-number">7</h2>
                            </div>
                            </div>

                            <div className="profile-header">
                              <h2 className="profile-title">
                                Profile Page
                              </h2>
                            </div>

                            <div className="profile-desc"> 
                            <div className="profile-desc-padding">

                            The users can also visit profile page of the author where they 
                            can learn more about the author. They can also check other works by 
                            the author and purchase if they wanted to collaborate on those tracks.
                            </div>
                            </div>

                            <div className="profile-pic"> 

                          <img src={Profile}/>
                            </div>




                          </div>
                          </div>

                        </div>

                        <div className="checkout"> 
                        <div className="checkout-container"> 
                        <div className="checkout-padding"> 
                          <div className="checkout-titles"> 
                          <div className="checkout-circle"> 
                          <div className="checkout-circle-container"> 
                         <h2 className="checkout-heading"> 8</h2> 
                          </div>
                          </div>

                          <div className="checkout-header"> 
                          <h2 className="checkout-title">
                          Checkout
                          </h2>
                          </div>

                          <div className="checkout-decs">
                            <div className="checkout-decs-container"> 
                            A short checkout process helps the users to buy the demo. To
                             be able to roll out the MVP as soon as possible, we decided on
                              sending the demos through email. Later, we will be introducing 
                              dashboards where the users can access the purchased demos.
                            </div>
                             </div>
                             </div>

                             <div className="checkout-image"> 
                             <div className="checkout-image-wrap"> 
                             <div className="checkout-images"> 
                             <video
                      
                              className="video1"
                              autoPlay
                              loop
                              playsInline
                              muted
                            >
                              <source src={Product} type="video/mp4" />
                              Your browser does not support videos :(
                            </video>

                             


                             </div>
                             </div>

                             </div>



                             


                        </div>
                        </div>
                        </div>

                        <div className="mobileverson"> 
                        <div className="mobileversion-container"> 
                        <div className="mobileversion-padding">
                          <div className="mobileversion-vert"> 

                            <div className="mobileversion-circle"> 
                            <div className="mobileversion-circle-container"> 
                            <h2 className="mobileversion-circle-head">9</h2>
                            </div>
                            </div>

                            <div className="mobileversion-heading"> 
                            <h2 className="mobileversion-title">
                            Mobile Version
                            </h2>
                            </div>

                            <div className="mobileversion-desc">
                            <div className="mobileversion-decs-container">
                            I also designed responsive/mobile version for the website and the interface. 
                            I used Figma’s auto layout feature which made this process so much 
                            easier than doing it manually.
                            </div>
                            </div>

                            



                          </div>

                          <div className="mobileversion-image"> 
                            <video
                      
                              className="video1"
                              autoPlay
                              loop
                              playsInline
                              muted
                            >
                              <source src={Mobile} type="video/mp4" />
                              Your browser does not support videos :(
                            </video>
                           

                            </div>
                          
                        </div>

                        
                        
                        </div>

                        </div>




               </div>
                 </div>
                
               {/* Prototype link */}
               
               <div className="section" style={{backgroundColor: '#111'}}>
                 <div className="sectionContent"> 

                 <div className="prototype-header"> 
                 <div className="prototype-header-container"> 
                 <h2 className="prototype-title"> Prototype Links</h2>
                 </div>
                 </div>

                 <div className="prototype-subheader"> 
                 <div className="prototype-subheader-container">
                 Here’s the final prototype that was finalised with the client.
                 </div>
                 </div>

                 <div className="prototype-decs"> 
                 <div>
                   <p className="prototype-decs-container"> 
                   The prototype works in this flow:
                   <br/>
                   Homepage - Registration - Onboarding - Upload Track - Search - Search Results - Track Page / Author Page - Checkout
                   </p>
                 </div>
                 </div>

                  <div className="prototpye-button"> 
                  <div className="prototype-button-container"> 
                  {/* button */}
                  <a href="https://www.figma.com/proto/GxalNlw1AytXlWRFhN2nzG/JukeDeck?node-id=335%3A10575&scaling=min-zoom" target="_blank" role="button" className="prototype-button">
                    <span className="prototype-button">
                      <span className="prototype-icon">
                      <FiEye size={15} color="#000000" color="#ffff" />
                      </span>
                      <span className="prototype-text"> 
                      View Web Prototype

                      </span>

                       </span>
                    </a>
                  </div>
                  </div>

                  <div className="prototpye-button"> 
                  <div className="prototype-button-container"> 
                  {/* button */}
                  <a href="https://www.figma.com/proto/GxalNlw1AytXlWRFhN2nzG/JukeDeck?node-id=407%3A488&scaling=scale-down" target="_blank" role="button">
                    <span className="prototype-button">
                      <span className="prototype-icon">
                      <FiEye size={15} color="#000000" color="#ffff" />
                      </span>
                      <span className="prototype-text"> 
                      View Responsive Prototype

                      </span>

                       </span>
                    </a>
                  </div>
                  </div>

                  



                 </div>
               </div>
             


               
                <div className="section" style={{backgroundColor: '#e2efed'}}>
                  <div className="sectionContent">

                    <div>
                        <h2 className="texting-title">Testing</h2>

                    </div>

                    <div className="testing-desc">
                      <div>
                        <p className="testing-desc-container">
                        While we did some user testing with out MVP’s 
                        prototype and refined it, the product is yet to
                         be launched and tested thoroughly for any issues
                          that we might have missed.
                        </p>
                      </div>
                    </div>

                    <div className="testing-decs">
                    <div className="testing-desc-container">
                    I will be updating this case study with new findings and
                     changes we make as we launch and test the product.
                    </div>

                    </div>


                     </div>
                   </div>
               


               
                  <div className="section">
                    <div className="sectionContent">

                      {/* heading */}
                      <div className="reflect-title">
                        <div className="reflect-container">
                          <h2 className="reflect-heading">Reflecting back</h2>
                        </div>
                         </div>

                         <div className="reflect-paragraph"> 
                          <div className="reflect-paragraph-container">
                         
                            This is probably the biggest freelance project I’ve 
                            done so far and it’s been full of learnings for me.
                            Here’s what I learnt:

                            <br/>
                            
                            <span className="container-bold">Scoping out the MVP:</span>
                            <br/>
                            
                            Projects like this can easy become big so it is necessary
                             to be able to scope out and define a MVP so we can focus on
                              getting out the product as soon as possible.
                              <br/>
                            
                              <span className="container-bold">
                               Figma Auto Layout:
                              </span>
                              <br/>
                              

                            Figma is my favorite design tool and it recently launched new
                             version of Auto Layout. I learnt how to utilise auto layout
                              so I can create responsive designs.
                           

                          </div>
                         </div>




                    </div>
                  </div>
               












               
                  <div className="section">
                    <div className="sectionContent"> 
                    <div >
                      <span className="footer-wrap">Copyright © 2021. Designed by <a href="https://www.linkedin.com/in/kenneth-okereke-8a0b1991/" className="name" target="_blank">Kenneth Okereke</a></span>
                    </div>
                     </div>
                  </div>
                   


             </div>


            </div>
         
      );
   }
}

export default JukeDeck;



