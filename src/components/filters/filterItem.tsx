import { StyledFilterItemWrapper, StyledFilterText } from "./styles";

const FilterItem = ({
  filter,
  isSelected,
  onClick,
}: {
  filter: string|undefined;
  isSelected: boolean;
  onClick: VoidFunction;
}) => {
  return (
    <StyledFilterItemWrapper onClick={onClick} isSelected={isSelected}>
      <StyledFilterText isSelected={isSelected}>{filter}</StyledFilterText>
    </StyledFilterItemWrapper>
  );
};

export default FilterItem;
