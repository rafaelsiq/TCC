import Button from "../../atoms/button/button"
import initialStrings from '../../../constants/initialPage.json'
import routers from '../../../global/Routers/routers.json'
import './access-content.css'
function AccessContent() {
    return (
        <div id="access_content">
            <Button
                id="login_button"
                label={initialStrings.loginButton}
                type='header'
                to={routers.login}
            ></Button>
            <Button
                id="singup_button"
                label={initialStrings.singupButton}
                type='header'
                to={routers.singup}
            ></Button>
        </div >
    )
}
export default AccessContent