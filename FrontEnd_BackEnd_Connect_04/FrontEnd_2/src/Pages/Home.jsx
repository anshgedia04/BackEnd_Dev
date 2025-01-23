import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const [Employee, setEmployee] = useState([]);

  const FetchEmp = async () => {
    const response = await fetch('http://localhost:4000/api/v1/getAllEmp');
    const data = await response.json();
    setEmployee(data);
  };

  useEffect(() => {
    FetchEmp();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Employees</h2>
        <NavLink to="/createEmp">
          <button className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 text-lg rounded-full shadow-md hover:scale-105 transform transition">
            + Add Employee
          </button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Employee.length ? (
          Employee.map((emp) => (
            <div
              key={emp.id}
              className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition"
            >
              <h3 className="text-xl font-bold mb-2">{emp.name}</h3>
              <p className="text-gray-600">
                <strong>Salary:</strong> {emp.salary}
              </p>
              <p className="text-gray-600">
                <strong>Department:</strong> {emp.department}
              </p>
            </div>
          ))
        ) : (
          <p className="text-lg font-semibold text-center col-span-full">
            No employees found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
