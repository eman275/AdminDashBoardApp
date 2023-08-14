import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";


export const StyledDataGrid = styled(DataGrid)`
& .MuiTablePagination-root {
  direction: rtl;
}
& .MuiDataGrid-footerContainer {
 display:flex ;   
 justify-content: flex-start;
 padding-inline-start: 40px;
}
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 17px;
  opacity: 1;
  width: 100%;
  height: 100%
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; /* Remove scrollbar for modern browsers */
  -ms-overflow-style: none; /* Remove scrollbar for IE and Edge */

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const SharedCellCell = styled.div`
  width: 66px;
  height: 25px;
  border-radius: 13px;
  opacity: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuspendedCell = styled(SharedCellCell)`
  background: #f5c62a33 0% 0% no-repeat padding-box;
`;

export const ConvertedCell = styled(SharedCellCell)`
  background: #83838333 0% 0% no-repeat padding-box;
`;
export const ClosedCell = styled(SharedCellCell)`
  background: #438fce 0% 0% no-repeat padding-box;
`;

export const ClosedWitCoupon = styled(SharedCellCell)`
  background: #2ec988 0% 0% no-repeat padding-box;
  width: 122px;
`;

export const RedTextCell = styled.div`
  color: red;
  
`;

export const BlueButton = styled.button`
  background-color: #0074D9;
  border-radius: 13px;
  color: white; /* You might want to specify text color */
  /* You can add more styles here if needed */
`;
