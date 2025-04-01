import './Person.css'

const Person = (props) => {
return (
    <div className='person-block'>
    <p>Name: {props.name}</p>
    <p>Title: {props.title}</p>
    <p>Salary: {props.salary}€</p>
    <p>Phone Number: {props.phone}</p>
    <p>Email: {props.email}</p>
    <p>Favorite animal: {props.animal}</p>
    </div>
)
}
export default Person