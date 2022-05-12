import Image from '../../atoms/image/image';
import homeLeft from '../../../constants/files/home-left.png';
import './home-footer.css'

function homeFooter() {
    return (
        <div id='homefooter' style={{display: 'flex', 'justifyContent': 'space-between'}}>
            <Image {...{ src: homeLeft,style:{'overflow': 'hidden'}  }} ></Image>
        </div>
    )
}

export default homeFooter;