import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DashboardNavbar from "../Navbar/DashboardNavbar/DashboardNavbar";
import DashboardLanding from "./DashboardSubComponents/DashboardLanding/DashboardLanding";

function Dashboard() {
  const history = useHistory();
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail === "") {
      history.push("/");
    }
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <DashboardLanding />
    </div>
  );
}

export default Dashboard;
