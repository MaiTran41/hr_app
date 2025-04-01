import './App.css'
import Header from './Header'
import Person from './Person'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <main className='person-container'>
        <Person  name="Mai Tran" title="CEO" salary={2000} phone="9836536" email="name@mail.com" animal="Cat"/>
        <Person  name="Max" title="COO" salary={1000} phone="6267183" email="name@mail.com" animal="Dog"/>
        <Person  name="Mike" title="CFO" salary={1770} phone="9476282" email="name@mail.com" animal="Fox"/>
        <Person  name="Marry" title="CHO" salary={1800} phone="8387262" email="name@mail.com" animal="Rabbit"/>
      </main>
      <Footer className="footer"/>
    </>
  )
}

export default App
