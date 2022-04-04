import Button from '../../atoms/button/button';
import './home-header.css';
function homeHeader() {
  return (
    <div className="home-header">
      <div id='left'>
        <Button
          label='Home'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to='/Home'
        ></Button>
      </div>
      <div id='right'>
        <Button
          label='Downloads'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to='/Downloads'
        ></Button>
        <Button
          label='Reports'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to='/Reports'
        ></Button>
        <Button
          label='Menu'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to='/Menu'
        ></Button>
        <Button
          label='Log Out'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to='/Logout'
        ></Button>
      </div>
    </div>
  );
}

export default homeHeader;
