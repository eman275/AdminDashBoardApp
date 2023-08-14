import { ReactElement, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {
  SideBarListBox,
  StyledFormatAlignJustifyIcon,
  StyledLogoImg,
  StyledSideBarBox,
  StyledSideBarHeaderBox,
} from "./styles";
import { sideBarData } from "../../_mock/sidBarData";
import { Typography } from "@mui/material";
import SideBarFooter from "../SideBarFooter/SideBarFooter";

const SideBarWrapper = ({ children }: { children: ReactElement }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar open/close

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <StyledSideBarBox>
      <CssBaseline />
      <Drawer
        sx={{
          width: isSidebarOpen ? 240 : 110,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isSidebarOpen ? 240 : 110,
            // display: isSidebarOpen ? 'block' : 'none', // Control the display of the sidebar
          },
        }}
        variant='permanent'
        anchor='right'>
        <StyledSideBarHeaderBox onClick={toggleSidebar}>
          <StyledFormatAlignJustifyIcon />
          <StyledLogoImg src='/assets/VATLogo.png' alt='logo' />
        </StyledSideBarHeaderBox>
        <Toolbar />
        <Divider />
        <List>
          {sideBarData.map((item, index) => (
            <SideBarListBox key={index}>
              {isSidebarOpen && <Typography>{item.title}</Typography>}
              <img src={item.icon} alt='icons' />
            </SideBarListBox>
          ))}
        </List>
        <Divider />
        <SideBarFooter isSidebarOpen={isSidebarOpen} />
      </Drawer>
      <Drawer
        sx={{
          width: `calc(100% - ${isSidebarOpen ? 240 : 110}px)`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `calc(100% - ${isSidebarOpen ? 240 : 110}px)`,
            padding: "37px 50px 40px 50px",
            direction: "rtl",
            height: "100%",
            background: "#F5F5FA",
          },
        }}
        variant='permanent'
        anchor='left'>
        {children}
      </Drawer>
    </StyledSideBarBox>
  );
};

export default SideBarWrapper;
