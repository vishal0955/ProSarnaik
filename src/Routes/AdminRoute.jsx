import { Routes, Route, Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";

import AdminHome from "./AdminHome";
import UsersList from "./UsersList";
import SystemReports from "./SystemReports";
import AllProperties from "./AllProperties";
import AddProperties from "./AddProperties";


const AdminDashboard = () => {
  return (
    <div>
      {/* Admin Header Always Visible */}
      <AdminHeader />  
      <Routes>
        {/* Default Route - Show Admin Home when Admin Dashboard Opens */}
        <Route index element={<AdminHome />} />  
        <Route path="home" element={<AdminHome />} />
        <Route path="userlist" element={<UsersList />} />
        <Route path="systemreports" element={<SystemReports />} />
        <Route path="allproperties" element={<AllProperties />} />
        <Route path="addproperties" element={<AddProperties />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;