import React from 'react'

import Card from './Card'
import FilterBar from './FilterBar'
import { ReactComponent as Heart } from '../Images/portfolio/heart.svg'
import { ReactComponent as ReactIcon } from '../Images/portfolio/React-icon.svg'
import Aetna from '../Images/Aetna/aetna-logo.svg'
import Lululemon from '../Images/lululemon/lululemon-logo.svg'
import Sweepr from '../Images/Sweeper/sweepr-logo.png'
import Covid19App from '../Images/Covid19App/iconlogo.png'
import Snapchat from '../Images/snapchat/snaplogo.png'
import Powermoves from '../Images/powermoves/music.png'
import Tedx from '../Images/Tedx/tedx-logo.png'
import lipigment from '../Images/lipigment/lipigmentlogo.png'

import '../Stylesheet/portfolio.scss'


const projects = [
  
   {
      id: "lululemon",
      title: 'Lululemon',
      description: "My work as a UX Designer",
      color: "#d41515",
      type: "UI/UX Design",
      logo: Lululemon

   },
   {
      id: "snapchat",
      title: 'Snapchat',
      description: "A personal project I made",
      color: "#0A2F3C",
      type: "Personal Projects",
      logo: Snapchat
  
   },
   {
      id: "sweepr",
      title: 'Sweepr',
      description: "My work as a UI/UX Designer ",
      color: "#FF9445",
      type: "UI/UX Design",
      logo: Sweepr
    
   },
   {
      id: "aetna",
      title: 'Aetna',
      description: "My work as a UI/UX Design Intern",
      color: "#9D27DC",
      type: "UI/UX Design",
     logo: Aetna
   },
   {
      id: "Covid19App",
      title: 'CovidCoop',
      description: "Designed and programmed using React.js",
      color: "#0b6ce3",
      type: "Front End Development",
      logo: Covid19App,
    //   link: "https://dribbble.com/spoorthyv"
   },
   {
    id: "powermoves",
    title: 'Powermoves',
    description: "a personal project I designed and built using React.js",
    color: "#423F3F",
    type: "Personal Projects",
    logo: Powermoves,
  //   link: "https://dribbble.com/spoorthyv"
 },
 {
   id: "lipigment",
   title: 'Lipigment',
   description: "As a Front end developer I designed and built their application in react.js",
   color: "#656565 ",
   type: "Front End Development",
   logo: lipigment,
 //   link: "https://dribbble.com/spoorthyv"
},

];

class Portfolio extends React.Component {
   state = { filter: "" };

   setFilter = (term) => {
      if (this.state.filter === term) {
         this.setState({ filter: "" });
      } else {
         this.setState({ filter: term });
      }
   }

   renderCards() {
      return projects.filter(project => {
         return project.type.includes(this.state.filter)
      })
      .map(project => {
         return (
            <Card project={project} key={project.id}/>
         );
      });
   }

   render() {
      return (
         <div id="portfolio">
            <div id="portfolioBody">
               <h3 id="header">Here's what I've been working on:</h3>
               <FilterBar clickHandler={this.setFilter} currFilter={this.state.filter}/>
               <div id="cardGrid">
                  {this.renderCards()}
               </div>
            </div>
            <div id="footer">
               <a href="https://github.com/spoorthyv/spoorthyv.github.io" target="_blank">
                  <h4>This site was built with <Heart id="heartIcon"/> from scratch using <ReactIcon id='reactIcon'/></h4>
               </a>
            </div>
         </div>
      );
   }
}

export default Portfolio;