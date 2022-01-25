import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Card from "./components/Cards/card";
import Pagination from "./components/Pagination/pagination";

function App() {
  let [CharacterNumber, setCharacterNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);

  const handleCharacterNumber = value => setCharacterNumber(value);

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
        <div className="row" style={{ height: "70vh" }}>
          <Card fetchData={fetchData} />
        </div>
        <div className="row">
          <Pagination CharacterNumber={CharacterNumber} onhandleCharacterNumber={handleCharacterNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
