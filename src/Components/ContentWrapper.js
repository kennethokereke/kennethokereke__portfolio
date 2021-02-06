import React from 'react'

import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import SimpleReactLightbox from "simple-react-lightbox";


import Resume from './Resume';

import Portfolio from './Portfolio';

import johnsonjohnson from './JohnsonJohnson';
import lululemon from './Lululemon';
import sweeper from './Sweeper';
import Covid19App from './Covid19app'
import Tedx from './Tedx'
import Snapchat from './Snapchat'
import Powermusic from './Powermusic'



class ContentWrapper extends React.Component {
   isMainPage(currentRoute) {
      return ['/', '/resume', ].includes(this.props.location.pathname);
   }

   constructor(props) {
        super(props)
        this.myRef = React.createRef()
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         this.myRef.current.scrollTop = 0;
      }
   }

   render() {
      return (
         <SimpleReactLightbox>      
            <div id="wrapper" className={this.isMainPage() ? 'bigNav' : 'smallNav'} ref={this.myRef}>
               <TransitionGroup className="transition-group">
                  <CSSTransition
                  key={this.props.location.key}
                  timeout={{ enter: 600 }}
                  classNames="fade"
                  >
                     <section className="route-section">
                        <Switch location={this.props.location}>
                           <Route exact path="/" component={Portfolio} />
                           <Route path="/resume" component={Resume} />
                           <Route path="/johnson" component={johnsonjohnson} />
                           <Route path="/lululemon" component={lululemon} />
                           <Route path="/sweepr" component={sweeper} />
                           <Route path="/powermusic" component={Powermusic} />
                           <Route path="/CovidCoop" component={Covid19App} />
                           <Route path="/snapchat" component={Snapchat} />
                           <Route path="/Tedx" component={Tedx} />
                           
                        </Switch>
                     </section>
                  </CSSTransition>
               </TransitionGroup>
            </div>
         </SimpleReactLightbox>
      );
   }
}

export default withRouter(ContentWrapper);
