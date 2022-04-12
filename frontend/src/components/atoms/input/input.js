import { TextField } from '@mui/material';
import './input.css';

function Input({title}) {
    return (
      <div id="input">
         <TextField id="input_title" label={title} variant="outlined" />
      </div>
    );
}

export default Input;