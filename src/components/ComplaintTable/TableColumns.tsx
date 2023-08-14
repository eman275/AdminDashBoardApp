import { ComplaintInterface } from "../../@types";
import {
  BlueButton,
  ClosedCell,
  ClosedWitCoupon,
  ConvertedCell,
  RedTextCell,
  SuspendedCell,
} from "./styles";




export const TableColumns = [
  {
    field: "ComplaintNumber",
    headerName: "رقم الشكوى",
     width: 180,
    filter: "agTextColumnFilter",
    pinned: "right"
   
  },
  {
    field: "ComplaintDepartment",
    headerName: "القسم المختص بالشكوى",
    width: 180,
  },
  {
    field: "ComplaintStatus",
    headerName: "حالة الشكوى",
    width: 160,
    renderCell: (params: any) => {
      const complaintStatus = params.value;

      if (complaintStatus === "معلقة") {
        return <SuspendedCell>{complaintStatus}</SuspendedCell>;
      } else if (complaintStatus === "محولة") {
        return <ConvertedCell>{complaintStatus}</ConvertedCell>;
      } else if (complaintStatus === "مغلقة") {
        return <ClosedCell>{complaintStatus}</ClosedCell>;
      } else if (complaintStatus === "مغلقة مع قسيمة") {
        return <ClosedWitCoupon>{complaintStatus}</ClosedWitCoupon>;
      }

      return complaintStatus;
    },
  },
  {
    field: "ComplaintDate",
    headerName: "تاريخ الشكوى",
    width: 160,
    renderCell: (params: any) => <RedTextCell>{params.value}</RedTextCell>,
  },
  {
    field: "ComplaintTimeFrame",
    headerName: "تاريخ قفل الشكوى",
    width: 200,
  },
  { field: "TaxpayerName", headerName: "اسم التاجر الممول", width: 180 },
  { field: "city", headerName: "المدينه", width: 180 },
  { field: "area", headerName: "المنطقه", width: 180 },
  { field: "area", headerName: "المنطقه", width: 180 },


  {
    field: "Details",
    headerName: "Details",
    width: 100,
    pinned: "left",
    renderCell: (params: any) => (
      <BlueButton>
       كل التفاصيل 
    </BlueButton>
    ),
  },
];

export const dataGridProps = (data: ComplaintInterface[]) => {
  return {
    rows: data,
    columns: TableColumns,
     componentsProps: {
      pagination: {
        page: 0, // Start from page 1
        rowsPerPageOptions: [5, 10, 20],
        labelDisplayedRows: ({ from, to, count, page }: any) =>
          `صفحة ${page + 1} من ${Math.ceil(count / (to - from + 1))}`,
        labelRowsPerPage: 'عدد الصفوف في كل صفحة:',
      },
    },


    // disableSelectionOnClick: true,
  };
};
