import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const DropDownLang = () => {
  const [lang, setLang] = React.useState("ar");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <FormControl>
      <Select value={lang} onChange={handleChange}>
        <MenuItem value={"ar"}>العربيه</MenuItem>
        <MenuItem value={"en"}>English</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDownLang;
