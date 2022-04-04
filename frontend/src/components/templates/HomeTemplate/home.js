import Header from '../../molecules/homeHeader/home-header'
import Content from '../../organisms/HomeContent/home-content'
import Footer from '../../molecules/homeFooter/home-footer'
import Background from '../../atoms/background/background'
function HomeTemplate() {
    return (
        <div >
            <Background 
            {...{
                Header,
                Content,
                Footer
            }}
            ></Background>
        </div>
    );
}

export default HomeTemplate;
