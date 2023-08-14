import { ComplaintInterface } from "./../../@types/index.d";
import { useEffect, useState } from "react";
import { AdvancedFilterInterface, KeyType } from "../../@types";
import { ComplaintDataList } from "../../_mock/TableData";
import { filtersData } from "../../_mock/FilterData";

export const useComplaintTable = () => {
    const [selectedFilter, setSelectedFilter] = useState(0);
    
  const [selectedAdvancedFilter, setSelectedAdvancedFilter] =
    useState<AdvancedFilterInterface>();
  const [tableData, setTableData] = useState(ComplaintDataList);
  const applyAdvancedFilter = () => {
    let filtered: ComplaintInterface[] = [];
    if (selectedAdvancedFilter == undefined && selectedFilter == undefined)
      return ComplaintDataList;
    else {
      const filterKeys = Object.keys(selectedAdvancedFilter ?? {});

      filterKeys.map((key: KeyType) => {
        filtered = ComplaintDataList.filter(
          (row: any) => row?.[key] == (selectedAdvancedFilter as any)?.[key]
        );
      });
      console.log("filtered", filtered);
    }
  };
    useEffect(() => {
        if (selectedFilter)
           setTableData(
             ComplaintDataList.filter(
               (item) => item.ComplaintDepartment == filtersData[selectedFilter]
             )
           );
        else
            setTableData(ComplaintDataList)
 },[selectedFilter])
  return {
    setSelectedFilter,
    setSelectedAdvancedFilter,
    applyAdvancedFilter,
    tableData,
    selectedFilter,
    selectedAdvancedFilter,
  };
};
