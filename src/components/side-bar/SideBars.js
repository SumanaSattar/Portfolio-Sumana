import './SideBars.css'
import { BsGithub,BsLinkedin } from 'react-icons/bs';

function SideBars() {
    return (
        <>
           <div className="left-side-container">
           <div className="left-side-container_icons">
               <div className="icon-padding">
               <BsGithub />
               </div>
               <div className="icon-padding">
               <BsLinkedin/>
               </div>
           
           </div>
           <div className="vl"></div>
          
           
           </div>
            <div className="side-right-container">
                <p className="email">sumana.sattar@gmail.com</p>
                <div className="vl"></div>
            </div>

        </>
    );
}

export default SideBars;