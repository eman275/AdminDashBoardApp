import { HeaderLoginBox, LogInBox } from './loginStyle';
import LoginCard from '../../components/LogInCard/LogInCard';
import DropDownLang from '../../components/DropDownLang/DropDownLang';

const LogIn = () => {
  return (
    <LogInBox>
        <HeaderLoginBox>
          <DropDownLang/>
            <img  src='/assets/VATLogo.png' alt='logo'/>

        </HeaderLoginBox>
        <LoginCard/>
      
    </LogInBox>
  )
}

export default LogIn;
