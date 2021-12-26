import './home.css';
import backgroundImage from '../../../constants/files/geral-background.png'
import Header from '../../../components/homeHeader/home-header';
import HomeBody from '../blocks/homeMidContent/homeBody';
const homePageConstants = require('../../../constants/homePage.json')

function Home() {
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
      <Header content={homePageConstants} />
      <HomeBody content={homePageConstants}></HomeBody>
    </div>
  );
}

export default Home;
