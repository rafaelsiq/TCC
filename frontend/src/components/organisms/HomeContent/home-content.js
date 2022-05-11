import homeStrings from '../../../constants/homePage.json'
import { Button } from '@mui/material';
import './home-content.css';
import routers from '../../../global/Routers/routers.json'

function HomeContent() {

    return (
        <div id="homecontent">
            <h1 id="top">{homeStrings.topText}</h1>
            <h1 id="bottom">{homeStrings.bottomText}</h1>
            <div id="buttonAbout">
                <Button
                    variant="outlined"
                    children={homeStrings.buttonAbout}
                    type='standard'
                    href={routers.about}
                ></Button>
            </div>
        </div>)
}
export default HomeContent;