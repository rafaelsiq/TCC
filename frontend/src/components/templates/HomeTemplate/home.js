import Header from '../../molecules/homeHeader/home-header'
import Content from '../../organisms/HomeContent/home-content'
import Footer from '../../molecules/homeFooter/home-footer'

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
            <Footer />
        </div>
    );
}

export default HomeTemplate;
