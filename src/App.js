import "./App.css";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const saveUser = () => {
    let data = { name, email, mobile };
    fetch("https://official-joke-api.appspot.com/random_joke", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <h1>Post Api</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="mobile"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <br />
      <button type="Button" onClick={saveUser}>
        Save New User
      </button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "grey" }}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
