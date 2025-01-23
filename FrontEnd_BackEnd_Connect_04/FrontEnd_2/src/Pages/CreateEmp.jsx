import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateEmp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    age: '',
    salary: '',
    department: '',
  });

  const changeHandler = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/addEmp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Add New Employee</h2>
        <button
          className="bg-gradient-to-r from-gray-400 to-gray-600 px-6 py-2 rounded-full shadow-md hover:scale-105 transform transition"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800 max-w-xl mx-auto">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={form.name}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <button
          onClick={submitHandler}
          className="mt-6 w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transform transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
