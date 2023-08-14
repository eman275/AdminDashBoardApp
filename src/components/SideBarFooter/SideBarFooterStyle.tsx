import { Box, styled } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';


export const SideBarFooterStyle= styled(Box)`
width: 100%;
height: 153px;
background: #F7F7F7 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
margin-top: 200px;
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const SideBarContentStyle= styled(Box)`
display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const StyledLockIcon = styled(LockIcon)``