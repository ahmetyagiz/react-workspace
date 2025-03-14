import { useState } from 'react'
import './App.css'


function App() {

  //useState : hooks

  //useState : When a state changes, component will be rendered again.
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState("Smith");
  const [names, setNames] = useState(["Barney, Sarah, Megan, William"]);
  const [userInfo, setUserInfo] = useState({ username: "Ahmet", password: "12345" });
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }


  const handleChange = () => {
    setFirstName("Jane")
  }

  console.log("Component is rendered");

  return (
    <div>
      <div>{firstName}</div>
      <div><button onClick={handleChange}>Change Name to "Jane"</button></div>

      <div>{lastName}</div>
      <div><button onClick={() => { setLastName("Doe") }}>Change Last Name to "Doe"</button></div>

      <hr />

      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}

      <hr />

      <div>
        {show ? <div>Username: {userInfo.username}, Password: {userInfo.password}</div> : <div>Access Denied!</div>}
      </div>

      <hr />


      <div>{count}</div>
      <div><button onClick={increase}>Increase</button></div>

      <div><button onClick={decrease}>Decrease</button></div>
    </div>
  )
}

export default App
