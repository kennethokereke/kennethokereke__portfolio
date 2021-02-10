import React from 'react';

class FilterBar extends React.Component {
   render(props) {
      return (
         <div id="filterBar">
            <div className={(this.props.currFilter == "UI/UX Design") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("UI/UX Design")}>UI/UX Design Work</div>
            <div className={(this.props.currFilter == "Front End Development") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Front End Development")}>Front End Development</div>
            <div className={(this.props.currFilter == "Personal Projects") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Personal Projects")}>Personal Projects</div>
           
           
         </div>
      );
   }
}

export default FilterBar;