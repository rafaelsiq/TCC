import './button.css';
import { Link } from "react-router-dom"; 

function Button(content) {
  return (
    <div 
    >
        <Link to='/about' className="Button">{content.content}</Link>
    </div>
  );
}

export default Button;