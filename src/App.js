import React from "react";
import Tile from "./components/Tile";
import data from "./data.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [accessDate, setAcessDate] = useState(data);

  const dummyData = () => {
    console.log(accessDate[0].amount, 'jdjhj')
    setAcessDate({ accessDate: accessDate })
  }

  return (
    <div className="App">
      <Tile data={accessDate} />
      {/* {accessDate.map((item, id) => {
        return <div>{item.quantity}</div>
      })} */}
    </div>
  );
}

export default App;
