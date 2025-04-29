import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import "../components/Person/Person.css";

const AddEmployee = () => {
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
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header logo="Mai Tran" />
      <form action="submit" id="form-container">
        <h1>Add Employee Form</h1>

        <div id="form-input-container">
          <div className="form-inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="animal">Animal</label>
            <input
              type="text"
              id="animal"
              name="animal"
              value={formData.animal}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <button id="add-employee-btn">Add Employee</button>
        </div>
      </form>
      <Footer year={2025} />
    </>
  );
};

export default AddEmployee;
