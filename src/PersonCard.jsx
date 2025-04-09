import "./Person.css";

const calculateWorkingYears = (startDateStr) => {
  const today = new Date();

  const startDate = new Date(startDateStr);
  const workingYears = today.getFullYear() - startDate.getFullYear();

  return workingYears;
};
const calculateWorkingMonths = (startDateStr) => {
  const today = new Date();

  const startDate = new Date(startDateStr);
  const workingMonths = today.getMonth() - startDate.getFullYear();

  return workingYears;
};

const shouldRenderRecognitionMsg = (startDate) => {
  //   const yearsToGetRecognition = new Set([5, 10, 15]);
  //   return yearsToGetRecognition.has(workingYears);

  const workingYears = calculateWorkingYears(startDate);

  return workingYears === 5 || workingYears === 10 || workingYears === 15;
};
const shouldRenderProbationMsg = (startDate) => {
  //   const yearsToGetRecognition = new Set([5, 10, 15]);
  //   return yearsToGetRecognition.has(workingYears);

  return workingYears <= 0.5;
};

const PersonCard = (props) => {
  return (
    <div className="person-block">
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}€</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Animal: {props.animal}</p>
      <p>Start Date: {props.startDate}</p>
      <p>Location: {props.location}</p>
      <p>Department: {props.department}</p>
      <p>Skills: {props.skills.join(", ")}</p>

      {shouldRenderRecognitionMsg(props.startDate) && (
        <p>🎉 Schedule recognition meeting</p>
      )}
      {/* <p>🔔 Schedule probation review</p> */}
    </div>
  );
};
export default PersonCard;
