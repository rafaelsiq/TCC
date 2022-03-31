import './about.css';
import backgroundImage from '../../../constants/files/geral-background.png'
import Header from '../../../components/homeHeader/home-header';
import AboutBody from '../blocks/aboutMidContent/aboutBody';
const aboutPageConstants = require('../../../constants/aboutPage.json')

function About() {
  return (
    <div className="Home" 
    style={{    
      backgroundImage:`url('${backgroundImage}')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
  }}
    >
      <Header content={aboutPageConstants} />
      <AboutBody content={aboutPageConstants}></AboutBody>
    </div>
  );
}

export default About;
