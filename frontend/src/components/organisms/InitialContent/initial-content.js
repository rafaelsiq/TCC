import AccessContent from '../../molecules/accessContent/access-content';
import LoginInput from '../../molecules/loginInput/loginInput';
    import './initial-content.css';
function initialContent() {
    return (
        <div id="initialContent">
            <div id="access_header">
                <AccessContent />
            </div>
            <div id="login_input">
                <LoginInput />
            </div>
        </div>
    )
}
export default initialContent;