
import { useAuth0 } from '@auth0/auth0-react';
import { LogInCardBox } from './loginCardStyle';
import { Button, Typography } from '@mui/material';

const LoginCard = () => {
  const {loginWithPopup } = useAuth0();
  return (
    <LogInCardBox>
      <Typography>من فضلك قم بتسجسل الدخول</Typography>
      <Button variant="contained" color="primary" onClick={() => loginWithPopup()}>
        Login
      </Button>
    </LogInCardBox>
  );
};

export default LoginCard;

