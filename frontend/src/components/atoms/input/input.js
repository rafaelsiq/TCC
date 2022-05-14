import { TextField } from '@mui/material';
import './input.css';

function Input({title}) {
    return (
      <div id="input">
         <TextField id="input_title" label={title} variant="outlined" />
      </div>
    );
}
function InputStyle({title, style, value, id}) {
  return (
    <div id="input"
    style={{
      textAlign:'end'
    }}>
       <TextField 
       id={id} 
       label={title}  
       style={style} 
       defaultValue={value}
       variant="outlined" />
    </div>
  );
}

export {InputStyle};
export default Input;