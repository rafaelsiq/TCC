import Header from '../../molecules/homeHeader/home-header'
import Content from '../../organisms/HomeContent/home-content'

function HomeTemplate() {

    return (
        <div
        style={{
            paddingLeft:'5%',
            paddingRight:'5%',
            paddingTop:'10px'
        }}>
            <Header />
            <Content />
        </div>
    );
}

export default HomeTemplate;
