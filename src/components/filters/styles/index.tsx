import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledFilterItemWrapper = styled.div<{ isSelected: boolean }>`
  border-radius: 8px;
  background-color: ${(props) => (props.isSelected ? "#438FCE" : "#fff")};
  padding: 13px 40px;
  cursor:pointer;
`;
export const StyledFilterText = styled.span<{ isSelected: boolean }>`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
`;

export const StyledApplyFilterButton = styled(Button)({
  background: '#438FCE',
  color: '#fff'
  
})