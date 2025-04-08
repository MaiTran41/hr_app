import './Person.css'

const PersonCard = (props) => {


    
return (
    <div className='person-block'>
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
    <p>Skills: {props.skills.join(', ')}</p>
    </div>
)
}
export default PersonCard