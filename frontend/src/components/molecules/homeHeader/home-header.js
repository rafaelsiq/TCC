import Button from '../../atoms/button/button';
import './home-header.css';
import routers from '../../../global/Routes.json'
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
          to={routers.home}
        ></Button>
      </div>
      <div id='right'>
        <Button
          label='Downloads'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to={routers.download}
        ></Button>
        <Button
          label='Reports'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to={routers.reports}
        ></Button>
        <Button
          label='Menu'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to={routers.menu}
        ></Button>
        <Button
          label='Log Out'
          type='header'
          style={{
            "font-size": "20px"
          }}
          to={routers.logout}
        ></Button>
      </div>
    </div>
  );
}

export default homeHeader;
