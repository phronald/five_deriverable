import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const PokemonId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setCharacter(res.data))
      .catch(error=>console.log(error.response))
  }, []);

  return (
    <div>
      <h1>mostrando oersonaje con id: {id}</h1>
      <img src={character.sprites?.other.dream_world.front_default} alt="" />
      <h1>{character.name}</h1>
      <h4>{character.name}</h4>
    </div>
  );
};

export default PokemonId;
