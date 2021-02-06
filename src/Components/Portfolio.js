import React from 'react'

import Card from './Card'
import FilterBar from './FilterBar'
import { ReactComponent as Heart } from '../Images/portfolio/heart.svg'
import { ReactComponent as ReactIcon } from '../Images/portfolio/React-icon.svg'
import Johnson from '../Images/JohnsonJohnson/johnson-johnson.svg'
import Lululemon from '../Images/lululemon/lululemon-logo.svg'
import Sweepr from '../Images/Sweeper/sweepr-logo.png'
import Covid19App from '../Images/Covid19App/iconlogo.png'
import Snapchat from '../Images/snapchat/snaplogo.png'
import Powermoves from '../Images/powermoves/music.png'
import Tedx from '../Images/Tedx/tedx-logo.png'

import '../Stylesheet/portfolio.scss'


const projects = [
   {
      id: "johnson",
      title: 'Johnson & Johnson',
      description: "My work as a UI/UX Design Intern",
      color: "#a30303",
      type: "Work",
     logo: Johnson
   },
   {
      id: "lululemon",
      title: 'Lululemon',
      description: "My work as a UX Designer & Mobile Developer",
      color: "#d41515",
      type: "Work",
      logo: Lululemon

   },
   {
      id: "snapchat",
      title: 'Snapchat',
      description: "A personal project I made",
      color: "#0A2F3C",
      type: "Project",
      logo: Snapchat
  
   },
   {
      id: "sweepr",
      title: 'Sweepr',
      description: "My work as a UI/UX Designer ",
      color: "#FF9445",
      type: "Work",
      logo: Sweepr
    
   },
   {
      id: "Covid19App",
      title: 'Covid19-App',
      description: "Designed and programmed using React Native",
      color: "#0b6ce3",
      type: "Work",
      logo: Covid19App,
    //   link: "https://dribbble.com/spoorthyv"
   },
   {
    id: "powermoves",
    title: 'Powermoves',
    description: "personal project I made",
    color: "#423F3F",
    type: "Project",
    logo: Powermoves,
  //   link: "https://dribbble.com/spoorthyv"
 },
 {
    id: "tedx",
    title: 'Tedx',
    description: "My work as a UI/UX Designer",
    color: "#a30303",
    type: "Work",
    logo: Tedx,
  //   link: "https://dribbble.com/spoorthyv"
 }
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