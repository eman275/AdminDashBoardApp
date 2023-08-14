import ComplaintTable from "../ComplaintTable/ComplaintTable";
import SideBarWrapper from "../SideBar/SideBar";
import DashBoardHeading from "./DashboardHeader";

const DashBoard = () => {
  return (
    <SideBarWrapper>
      <>
        <DashBoardHeading />
        <ComplaintTable />
      </>
    </SideBarWrapper>
  );
};

export default DashBoard;
