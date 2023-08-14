import { Stack } from "@mui/material";
import { filtersData } from "../../_mock/FilterData";
import FilterItem from "./filterItem";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { StyledApplyFilterButton } from "./styles";
const GlobalFilter = ({
  setSelectedFilter,
  selectedFilter,
}: {
  setSelectedFilter: React.Dispatch<React.SetStateAction<number>>;
  selectedFilter: number;
}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} mb='20px'>
      <Stack direction={"row"} gap={3.43}>
        {filtersData.map((item, index) => (
          <FilterItem
            filter={item}
            key={index}
            isSelected={index == selectedFilter}
            onClick={() => setSelectedFilter(index)}
          />
        ))}
      </Stack>
      <StyledApplyFilterButton
        variant='contained'
        endIcon={<FilterAltOutlinedIcon />}>
     الغاء التصفيات{" "}
      </StyledApplyFilterButton>
    </Stack>
  );
};
export default GlobalFilter;
