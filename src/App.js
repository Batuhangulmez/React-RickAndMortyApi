import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { lazy, useEffect, useState } from "react";
import Card from "./components/Cards/card";

function App() {
  let [CharacterNumber, setCharacterNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);




  let api = `https://rickandmortyapi.com/api/character/${CharacterNumber}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);

    })();
  }, [api]);


  return (
    <div className="App">
      <h1 className=" ubuntu">Rick & Morty Wiki</h1>
      <div className="container" >
        <div className="row">
          <Card fetchData={fetchData} />
        </div>
      </div>
    </div>
  );
}

export default App;
