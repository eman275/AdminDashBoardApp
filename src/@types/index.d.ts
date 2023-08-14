
export interface ComplaintInterface {
  id: string | number;
  ComplaintNumber: number;
  ComplaintDepartment: string;
  ComplaintStatus: string;
  ComplaintDate: string;
  ComplaintTimeFrame: string;
  TaxpayerName: string;
  city?: string;
  area?: string;
  taxpayerBranchName?:string;
  RIN?: number;
  incentiveRegistered?: boolean;
  taxPaterType?: string;
  compliantType?: string;
  customerName?: string;
  customerMobileNumber?: string;
  customerNID?: number;
  Details?:any;
}

export interface sideBarInterFace {
  title: string;
  icon: string;
}


export interface AdvancedFilterInterface{
  ComplaintNumber?: number;
  ComplaintDepartment?: string;
  ComplaintStatus?: string;
  ComplaintDate?: string;
  ComplaintTimeFrame?: string;
  TaxpayerName?: string;
  city?: string;
  area?: string;
  taxpayerBranchName?:string;
  RIN?: number;
  incentiveRegistered?: boolean;
  taxPaterType?: string;
  compliantType?: string;
  customerName?: string;
  customerMobileNumber?: string;
  customerNID?: number;
  Details?:any;
}
type KeyType = keyof typeof ComplaintInterface;
