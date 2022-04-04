import homeStrings from '../../../constants/homePage.json'
import Button from '../../atoms/button/button';
import './home-content.css';
function homeContent() {
    return (
        <div id="homecontent">
            <h1 id="top">{homeStrings.topText}</h1>
            <h1 id="bottom">{homeStrings.bottomText}</h1>
            <div id="buttonAbout">
            <Button {...{
                type:'standard',
                to:"/about",
                label:homeStrings.buttonAbout, 
                }}></Button>
                </div>
        </div>)
}
export default homeContent;