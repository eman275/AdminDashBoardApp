import { useMemo } from "react";
import GlobalFilter from "../filters";
import { dataGridProps } from "./TableColumns";
import { StyledDataGrid } from "./styles";
import { useComplaintTable } from "./useComplaintTable";

const ComplaintTable: React.FC = () => {
  const {

    applyAdvancedFilter,
    setSelectedAdvancedFilter,
    setSelectedFilter,
    tableData,
    selectedAdvancedFilter,
    selectedFilter
  } = useComplaintTable()
  const tableGridProps = useMemo(() => dataGridProps(tableData), [tableData]);
  return (
    <>
      <GlobalFilter setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
      <StyledDataGrid {...tableGridProps}
       initialState={{ pinnedColumns: { left: ['Details'], right: ['ComplaintNumber'] } }}
       />
    </>
  );
};

export default ComplaintTable;
