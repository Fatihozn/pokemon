import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
function App() {
  const [pokemon, setPokemon] = useState({ data: [] });
  const [value, setValue] = useState("");

  useEffect(() => {
    getArray();
  }, [value]);

  const getArray = async () => {
    createArray();
  };

  const createArray = async () => {
    const sampleArray = [];
    const sampleObje = {
      name: "",
      png: "",
    };

    for (let i = 1; i < 50; i++) {
      const Obje = { ...sampleObje };
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`) // res.data.name isimlerini verir // res.data.sprites.front-shiny
        .then(
          (res) =>
            (Obje.name = res.data.name) +
            (Obje.png = res.data.sprites.front_shiny) +
            sampleArray.push(Obje)
        )
        .catch((err) => console.log(err));
    }

    setPokemon({ data: sampleArray });

    if (value !== "") {
      const filtred = sampleArray.filter(
        (element) =>
          element.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      setPokemon({ data: filtred });
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <SearchBar onChange={onChange} />
      <div className="App">
        {pokemon.data.map((element, i) => (
          <Card key={i} img={element.png}>
            {element.name}
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
