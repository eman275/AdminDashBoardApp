import { Stack } from "@mui/material";
import DropDownLang from "../DropDownLang/DropDownLang";
import { StyledTypography } from "./styles";

const DashBoardHeading = () => {
  return (
    <Stack
      mb='38px'
      justifyContent={"space-between"}
      flexDirection={"row"}
      alignItems={"center"}>
      <StyledTypography>ادارة الشكاوي</StyledTypography>
      <DropDownLang />
    </Stack>
  );
};

export default DashBoardHeading;
