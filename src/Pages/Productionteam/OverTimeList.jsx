import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const OverTimeList = () => {
    const designers = [
        {
            id: 101,
            name: "John Doe",
            totalLeave: 30,
            monthlyLeave: 2.5,
            leaveTaken: 5,
            casualLeaveHours: 4,
            overtimeHours: 6,
            overtimeDescription: "Worked on urgent project deadline",
            overtimeApproval: "Approved"
        },
        {
            id: 102,
            name: "Jane Smith",
            totalLeave: 30,
            monthlyLeave: 2.5,
            leaveTaken: 3,
            casualLeaveHours: 2,
            overtimeHours: 2,
            overtimeDescription: "Extra work on client revisions",
            overtimeApproval: "Pending"
        },
        {
            id: 103,
            name: "Alex Brown",
            totalLeave: 30,
            monthlyLeave: 2.5,
            leaveTaken: 10,
            casualLeaveHours: 6,
            overtimeHours: 8,
            overtimeDescription: "Backend optimization work",
            overtimeApproval: "Approved"
        },
        {
            id: 104,
            name: "Emma Davis",
            totalLeave: 30,
            monthlyLeave: 2.5,
            leaveTaken: 7,
            casualLeaveHours: 3,
            overtimeHours: 3,
            overtimeDescription: "Design tweaks for new project",
            overtimeApproval: "Declined"
        },
        {
            id: 105,
            name: "Ryan White",
            totalLeave: 30,
            monthlyLeave: 2.5,
            leaveTaken: 2,
            casualLeaveHours: 1,
            overtimeHours: 2,
            overtimeDescription: "Helped in team code review",
            overtimeApproval: "Approved"
        }
    ];

    // Function to calculate adjusted leave
    const calculateAdjustedLeave = (leaveTaken, casualLeaveHours, overtimeHours) => {
        const adjustedCasualLeave = overtimeHours / 8; // Convert overtime to leave days
        return 30 - leaveTaken + adjustedCasualLeave; // 30 total leave in a year
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-start">Designer Leave Management</h2>

            {/* Responsive Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table">
                        <tr>
                            <th>Designer ID</th>
                            <th>Designer Name</th>
                            <th>Overtime (Hours)</th>
                            <th>Overtime Description</th>
                            <th>Overtime Approval</th>
                            <th>Leave Taken</th>
                            <th>Casual Leave (Hours)</th>
                            <th>Adjusted Leave Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {designers.map((designer) => (
                            <tr key={designer.id}>
                                <td>{designer.id}</td>
                                <td>{designer.name}</td>
                                <td>{designer.overtimeHours}</td>
                                <td>{designer.overtimeDescription}</td>
                                <td>
                                    <span className={`badge bg-${designer.overtimeApproval === "Approved" ? "success" : designer.overtimeApproval === "Pending" ? "warning" : "danger"}`}>
                                        {designer.overtimeApproval}
                                    </span>
                                </td>
                                <td>{designer.leaveTaken}</td>
                                <td>{designer.casualLeaveHours}</td>
                                <td>{calculateAdjustedLeave(designer.leaveTaken, designer.casualLeaveHours, designer.overtimeHours).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OverTimeList;
