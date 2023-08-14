import "./App.css";
import LogIn from "./pages/LogIn/LogIn";
import DashBoard from "./pages/DashBoard/DashBoard";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return <>{!isAuthenticated ? <DashBoard /> : <LogIn />}</>;
}

export default App;
