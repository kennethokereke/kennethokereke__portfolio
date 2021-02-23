import React from 'react';

import resumePDF from '../files/resume.pdf';
import resumeIMG from '../Images/resume/resume-1.png';
import resumeIMG2 from '../Images/resume/resume-2.png'
import resumeIMG3 from '../Images/resume/resume-3.png'
import downloadCloud from '../Images/resume/downloadCloud.svg';

import '../Stylesheet/Resume/resume.scss';

class Resume extends React.Component {
   render() {
      return (
         <div id="resume">
            <div className="contentWrapper">
               <img src={resumeIMG}/>
               <img src={resumeIMG2}/>
               <img src={resumeIMG3}/>
               <a id="dlResumeButton" href={resumePDF}download>
                  Download Resume
                  <img src={downloadCloud}/>
               </a>
            </div>
         </div>
      );
   }
}

export default Resume;
