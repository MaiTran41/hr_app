import styles from "../About/About.module.css";

const About = () => {
  return (
    <>
      <main className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <h1 className={styles.heading}>Human Resource Application</h1>
          <p>
            A modern React application designed to simplify employee management
            for HR teams. The system tracks key employee information and
            highlights important status updates like probation periods or
            service milestones. Users can easily view, edit, and update
            essential details including salaries, departments, work locations,
            and professional skills. With an intuitive interface and real-time
            updates, this tool streamlines workforce management while providing
            valuable insights for team planning and development.
          </p>
          <h2 className={styles.subHeading}>Key Features</h2>
          <ul>
            <li>
              Maintains complete employee profiles and contact information
            </li>
            <li>Search functionality by name, department, or position</li>
            <li>Filter to display employees by department or status</li>
            <li>Adjust salary and benefits information</li>
            <li>Add new employees through a form</li>
          </ul>

          <h2 className={styles.subHeading}>Technologies Used</h2>
          <ul>
            <li>React (with Hooks)</li>
            <li>React Router</li>
            <li>Axios for API calls</li>
            <li>JSON Server (local backend for employees)</li>
            <li>JSONPlaceholder (public test API)</li>
            <li>Basic CSS</li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default About;
