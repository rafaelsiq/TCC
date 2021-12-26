import { Button, ButtonGroup } from '@mui/material';
import './home-header.css';

function homeHeader(content) {
  const contents = content.content;
  return (
    <div className="home-header">
      <ButtonGroup disableElevation>
        <Button >{contents.acessButtonText}</Button>
        <Button>{contents.aboutButtonText}</Button>
      </ButtonGroup>
    </div>
  );
}

export default homeHeader;
