import Content from '../../organisms/InitialContent/initial-content'
import Background from '../../atoms/background/background'
function InitialTemplate() {
    return (
        <div >
            <Background 
            {...{
                Content,
            }}
            ></Background>
        </div>
    );
}

export default InitialTemplate;
