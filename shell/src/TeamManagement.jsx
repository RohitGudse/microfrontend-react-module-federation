import React from "react";

const employees = [
  {
    id: 1,
    name: "Rohit Gudse",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Sharma",
    role: "Backend Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Patil",
    role: "UI/UX Designer",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Project Manager",
    status: "Active",
  },
];

const TeamManagement = () => {
  return (
    <div className="team-container">
      <h2>Team Management</h2>

      <table className="team-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamManagement;