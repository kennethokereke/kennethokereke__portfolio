import React from 'react'

import Card from './Card'
import FilterBar from './FilterBar'
import { ReactComponent as Heart } from '../Images/portfolio/heart.svg'
import { ReactComponent as ReactIcon } from '../Images/portfolio/React-icon.svg'
import Aetna from '../Images/Aetna/aetna-logo.svg'
import Lululemon from '../Images/lululemon/lululemon-logo.svg'
import Sweepr from '../Images/Sweeper/sweepr-logo.png'


import JukeDeck from '../Images/jukedeck/JukeDeck.png'
import Coachme from '../Images/coachme/coachemelogo.png'






import '../Stylesheet/portfolio.scss'


const projects = [
   {
      id: "jukedeck",
      title: 'JukeDeck',
      description: "Musical Artifical Intelligence",
      color: "#3999d8",
      type: "Work",
      logo: JukeDeck,
    //   link: "https://dribbble.com/spoorthyv"
   },
   {
     id: "coachme",
     title: 'Coach.me',
     description: " offers set of courses that help fitness coaches get more clients and leads.",
     color: "#06749e ",
     type: "Work",
     logo: Coachme,
   //   link: "https://dribbble.com/spoorthyv"
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
      id: "lululemon",
      title: 'Lululemon',
      description: "makes technical athletic clothes for yoga, running, working out, and most other sweaty pursuits.",
      color: "#d41515",
      type: "Work",
      logo: Lululemon

   },

   {
      id: "aetna",
      title: 'Aetna',
      description: "My work as a UI/UX Design Intern",
      color: "#9D27DC",
      type: "Work",
     logo: Aetna
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
               <a href="https://github.com/kennethokereke/kennethokereke__portfolio" target="_blank">
                  <h4>This site was built with <Heart id="heartIcon"/> from scratch using <ReactIcon id='reactIcon'/></h4>
               </a>
            </div>
         </div>
      );
   }
}

export default Portfolio;