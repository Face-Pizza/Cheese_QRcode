import * as H from '../style/HeaderStyle';
import Logo from '../assets/Logo_Cheese.png';
import manyCheese from '../assets/manyCheese.png';


const Header = () => {

    return(
        <>
        <H.Logo src={ Logo } />
        <H.HeaderP> 사진은 24시간 뒤에 삭제됩니다 </H.HeaderP>
        <H.manyCheese src={manyCheese}/>
        </>
    )
}

export default Header;