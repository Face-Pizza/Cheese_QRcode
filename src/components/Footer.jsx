import { useNavigate } from 'react-router-dom';
import Develop from '../assets/Developers.svg'
import insta from '../assets/instagram.svg'
import * as F from '../style/FooterStyle'



const Footer = () => {
    const navigate = useNavigate();

    const goToAboutPage = () => {
        navigate('/about');
    }

    const goToInstagram = () => {
        window.open('https://www.instagram.com/facepizzascheese/', '_blank'); // 새로운 탭에서 Instagram 열기
    };

    return(
        <F.Footer>
            <p id='copy'>Copyright ⓒ 2024. 동국대학교 치즈네컷 All rights reserved.</p>
            
            <F.ButtonBar>
               
                <button onClick={goToAboutPage}>
                <img src={Develop} />
                <span> Developers</span>
                </button>
                
                <button onClick={goToInstagram}>
                <img src={insta} />
                <span>  Instagram</span>
                </button>
            </F.ButtonBar>

        </F.Footer>
    )

}

export default Footer;