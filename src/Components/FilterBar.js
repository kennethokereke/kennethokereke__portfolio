import React from 'react';

class FilterBar extends React.Component {
   render(props) {
      return (
         <div id="filterBar">
            <div className={(this.props.currFilter == "UI/UX Internships") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("UI/UX Internships")}>UI/UX Internships</div>
            <div className={(this.props.currFilter == "Third Prism Studios") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Third Prism Studios")}>Third Prism Studios</div>
            <div className={(this.props.currFilter == "Personal Projects") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Personal Projects")}>Personal Projects</div>
           
           
         </div>
      );
   }
}

export default FilterBar;