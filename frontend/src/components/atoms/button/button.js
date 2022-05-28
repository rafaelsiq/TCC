import './button.css';
import { Link } from "react-router-dom";
import React from "react";

function Buttonss({style, type, to, label}) {
  if ('header'.includes(type))
    return (
      <div>
       <Link id='header' style={style} to={to} className="Button">{label}</Link>
      </div>
    )
  if ('standard'.includes(type))
    return (
      <div>
        <Link id='standard' style={style} to='/about' className="Button">{label}</Link>
      </div>
    );
    else
    return (
      <div>
        <Link id='standard' style={style} to='/about' className="Button">{label}</Link>
      </div>
    );
}

export default Buttonss;