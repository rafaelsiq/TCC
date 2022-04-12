import './loginInput.css'
import Input from '../../atoms/input/input'
function LoginInput (){
    return (
        <div id="login_input">
            <div id='username'>
            <Input
            title={"Username"}
            ></Input> 
            </div>
            <div id='password'>
            <Input
            title={"PassWord"}
            ></Input>
            </div>
        </div>
    )
}

export default LoginInput