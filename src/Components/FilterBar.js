import React from 'react';

class FilterBar extends React.Component {
   render(props) {
      return (
         <div id="filterBar">
            <div className={(this.props.currFilter == "Work") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Work")}>Work</div>
            <div className={(this.props.currFilter == "Personal Projects") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Personal Projects")}>Personal Projects</div>
            
           
           
         </div>
      );
   }
}

export default FilterBar;