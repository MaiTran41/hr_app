import styles from "../PersonCard/PersonCard.module.css";
import { emojisMap } from "../../data/emojisMap";
import { useState } from "react";
import PersonCardField from "./PersonCardField/PersonCardField";

const calculateWorkingYears = (startDateStr) => {
  const today = new Date();

  const startDate = new Date(startDateStr);
  const workingYears = today.getFullYear() - startDate.getFullYear();

  return workingYears;
};

function isWithinSixMonths(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Ensure d1 is the earlier date
  const [earlierDate, laterDate] = d1 <= d2 ? [d1, d2] : [d2, d1];

  // Create a new date that's exactly 6 months after the earlier date to avoid mutating the date objects
  const sixMonthsLater = new Date(earlierDate);
  sixMonthsLater.setMonth(earlierDate.getMonth() + 6);

  // If the later date is earlier than or equal to sixMonthsLater,
  // then the two dates are within 6 months or exactly 6 months apart
  return laterDate <= sixMonthsLater;
}

const shouldRenderRecognitionMsg = (startDate) => {
  //   const yearsToGetRecognition = new Set([5, 10, 15]);
  //   return yearsToGetRecognition.has(workingYears);

  const workingYears = calculateWorkingYears(startDate);

  return workingYears === 5 || workingYears === 10 || workingYears === 15;
};
const shouldRenderProbationMsg = (startDate) => {
  const today = new Date();

  return isWithinSixMonths(startDate, today);
};

const PersonCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
  onSalaryChange,
  onDepartmentChange,
  onLocationChange,
  onSkillsChange,
}) => {
  const skillStr = skills.join(", ");

  const [isEditing, setIsEditing] = useState(false);
  const [newSalary, setNewSalary] = useState(salary);
  const [newLocation, setNewLocation] = useState(location);
  const [newDepartment, setNewDepartment] = useState(department);
  const [newSkills, setNewSkills] = useState(skillStr);

  const handleSaveFields = () => {
    onSalaryChange(id, parseFloat(newSalary));
    // onLocationChange(id, newLocation);
    // onDepartmentChange(id, newDepartment);
    // onSkillsChange(id, newSkills);

    setIsEditing(!isEditing);
  };
  const handleCancel = () => {
    setNewSalary(salary);
    setNewLocation(location);
    setNewDepartment(department);
    setNewSkills(skills);

    setIsEditing(!isEditing);
  };

  return (
    <div className={styles.personCardContainer}>
      {shouldRenderRecognitionMsg(startDate) && (
        <div
          className={`${styles.alertContainer} ${styles.alertContainerSuccess}`}
        >
          <p>🎉 Schedule recognition meeting</p>
        </div>
      )}
      {shouldRenderProbationMsg(startDate) && (
        <div
          className={`${styles.alertContainer} ${styles.alertContainerWarning}`}
        >
          <p>🔔 Schedule probation review</p>
        </div>
      )}

      <div className={styles.avatarContainer}>
        <img
          src={`https://robohash.org/${name}?set=set3&size=100x100`}
          alt={`Avatar of ${name}`}
        />
      </div>

      <PersonCardField label="Name" value={name} />

      <PersonCardField label="Title" value={title} />

      <PersonCardField
        label="Salary"
        value={`${salary}€`}
        isEditing={isEditing}
        editValue={newSalary}
        onEditChange={setNewSalary}
        inputType="number"
      />

      <PersonCardField label="Phone" value={phone} />

      <PersonCardField label="Email" value={email} shouldUseWordBreakAll />

      <PersonCardField label="Animal" value={emojisMap[animal.toLowerCase()]} />

      <PersonCardField label="Start Date" value={startDate} />

      <PersonCardField
        label="Location"
        value={location}
        isEditing={isEditing}
        editValue={newLocation}
        onEditChange={setNewLocation}
      />

      <PersonCardField
        label="Department"
        value={department}
        isEditing={isEditing}
        editValue={newDepartment}
        onEditChange={setNewDepartment}
      />

      <PersonCardField
        label="Skills"
        value={skillStr}
        isEditing={isEditing}
        editValue={newSkills}
        onEditChange={setNewSkills}
        shouldUseTextArea
      />

      <div className={styles.btnContainer}>
        {isEditing ? (
          <>
            <button
              className={`${styles.btn} ${styles.cancelBtn}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`${styles.btn} ${styles.saveBtn}`}
              onClick={handleSaveFields}
            >
              Save
            </button>
          </>
        ) : (
          <button
            className={`${styles.btn} ${styles.editBtn}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
export default PersonCard;
