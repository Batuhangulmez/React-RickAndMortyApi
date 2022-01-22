import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Card from "./components/Cards/card";

function App() {
  let [CharacterNumber, setCharacterNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${CharacterNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
    })();
  }, [api]);


  return (
    <div className="App">
      <h1 className="text-center ubuntu">Rick & Morty Wiki </h1>
      <div className="container" >
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
