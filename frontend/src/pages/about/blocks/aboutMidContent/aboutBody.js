import './aboutBody.css';
import Button from '../../../../components/button/button'

function AboutBody(content) {
    const contents = content.content;
  return (
    <><div className='HomeBody' >
      <div className="TextBody">
        <p className='TextTop'>
            {contents.topText}
        </p>       
        <p className='TextBottom'>
            {contents.bottomText}
        </p>
      </div>
      <Button 
      className='ButtonHome'
      content={content.content.aboutButtonText}
      ></Button>
      <p style={{
        border: "5px solid darkslategrey",
        marginLeft:"1px",
        marginRight:"1px",
        borderRadius:"10px"
      }}> </p>
    </div>
    </>
  );
}

export default AboutBody;