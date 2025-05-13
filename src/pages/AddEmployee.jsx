import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import "../components/Person/Person.css";
import { useNavigate } from "react-router";
import axios from "axios";

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // since  'skills' input is a text input aka strings, we want it to be an array
    // we need to use .split('') to turn inputs into an array

    const formattedValue = name === "skills" ? value.split(",") : value;

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/employees",
        newEmployee
      );

      onAddEmployee(res.data);

      navigate("/");

      setFormData({
        name: "",
        title: "",
        salary: "",
        phone: "",
        email: "",
        animal: "",
        startDate: "",
        location: "",
        department: "",
        skills: [],
      });
    } catch (err) {
      console.error("Fetch error", err);
      return;
    }
  };

  return (
    <>
      <Header logo="Mai Tran" />
      <form id="form-container" onSubmit={handleSubmit}>
        <h1>Add Employee Form</h1>

        <div id="form-input-container">
          <div className="form-inputs-wrapper">
            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="name">Name</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="title">Title</label>
              </div>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="salary">Salary</label>
              </div>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="phone">Phone</label>
              </div>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="animal">Animal</label>
              </div>
              <input
                type="text"
                id="animal"
                name="animal"
                value={formData.animal}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="">Start Date</label>
              </div>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="location">Location</label>
              </div>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="department">Department</label>
              </div>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <div className="label-wrapper">
                <label htmlFor="skills">Skills</label>
              </div>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          </div>
          <button id="add-employee-btn">Add</button>
        </div>
      </form>
      <Footer year={2025} />
    </>
  );
};

export default AddEmployee;
