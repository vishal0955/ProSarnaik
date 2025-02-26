
import React, { useState } from "react";
import { Bell } from "lucide-react";

const NotificationBar = () => {
  const [notifications] = useState([
    { id: 1, message: "New task assigned", time: "5 min ago" },
    { id: 2, message: "Project deadline updated", time: "1 hour ago" },
  ]);

  return (
    <div className="dropdown">
      <button className="btn btn-light position-relative" data-bs-toggle="dropdown">
        <Bell size={24} />
        {notifications.length > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {notifications.length}
          </span>
        )}
      </button>
      <ul className="dropdown-menu dropdown-menu-end p-2 shadow">
        <li className="dropdown-header fw-bold">Notifications</li>
        {notifications.length === 0 ? (
          <li className="text-center p-2">No new notifications</li>
        ) : (
          notifications.map((n) => (
            <li key={n.id} className="dropdown-item">
              <strong>{n.message}</strong>
              <small className="d-block text-muted">{n.time}</small>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NotificationBar;