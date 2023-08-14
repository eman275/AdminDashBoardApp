import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FormalControlBox } from "./styles";

const DropDownLang = () => {
  const [lang, setLang] = useState("ar");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <FormalControlBox>
    <FormControl>
      <Select value={lang} onChange={handleChange}>
        <MenuItem value={"ar"}>العربيه</MenuItem>
        <MenuItem value={"en"}>English</MenuItem>
      </Select>
    </FormControl>
    </FormalControlBox>

  );
};

export default DropDownLang;
