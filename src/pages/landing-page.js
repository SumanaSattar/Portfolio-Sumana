import './landing-page.css'
import DesignBlock from '../images/Union.png'
import DesignBlockMain from '../images/DesignBlock.png';
import SideBars from '../components/side-bar/SideBars';
function LandingPage() {
    return (
        <>
            <main className="container">
                
                <img className="container_image" src={DesignBlockMain} />
                <div className='intro-container'>
                    <p className="intro-container_intro">Hi, my name is</p>
                    <h1 className="intro-container_name">Sumana Sattar .</h1>
                    <h2>Full stack developer</h2>
                    <p className="intro-container_describtion">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products</p>
                    <img className="intro-container_image" src={DesignBlock} alt="image for decoraiton" />
                </div>

               <SideBars />
              

                
            </main>

        </>
    );
}

export default LandingPage;