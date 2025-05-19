import "./PersonCard.css";
import { emojisMap } from "../../data/emojisMap";

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
}) => {
  return (
    <div className="person-block">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Title: {title}</p>
      <p>Salary: {salary}€</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Animal: {emojisMap[animal.toLowerCase()]}</p>
      <p>Start Date: {startDate}</p>
      <p>Location: {location}</p>
      <p>Department: {department}</p>
      <p>Skills: {skills.join(", ")}</p>

      {shouldRenderRecognitionMsg(startDate) && (
        <p>🎉 Schedule recognition meeting</p>
      )}
      {shouldRenderProbationMsg(startDate) && (
        <p>🔔 Schedule probation review</p>
      )}
    </div>
  );
};
export default PersonCard;
