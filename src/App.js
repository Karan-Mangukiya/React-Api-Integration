import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke").then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>Get Api Call</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Type</td>
          <td>Setup</td>
          <td>Punchline</td>
        </tr>

        {/* {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.type}</td>
            <td>{item.setup}</td>
            <td>{item.punchline}</td>
          </tr>
        ))} */}
      </table>
    </div>
  );
}

export default App;
