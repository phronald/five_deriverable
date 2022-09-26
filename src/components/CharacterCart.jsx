import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CharacterCart = ({ url }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);
  console.log(character);
  const navigate = useNavigate();
  return (
    <div
      className="item"
      onClick={() => navigate(`/pokemonid/${character.id}`)}
    >
      <div className="fond"></div>
      <section className="data_pokemon">
        <h2>{character.name}</h2>
        <span>
          {character.types?.map((types) => (
            <p key={types.type.url}>{types.type.name},</p>
          ))}
        </span>
        <article className="container_data">
          <p>{character.stats?.[0].stat.name}</p>
          <p>{character.stats?.[0].base_stat}</p>
          <p>{character.stats?.[1].stat.name}</p>
          <p>{character.stats?.[1].base_stat}</p>
        </article>
        <article className="container_data">
          <p>{character.stats?.[2].stat.name}</p>
          <p>{character.stats?.[2].base_stat}</p>
          <p>{character.stats?.[5].stat.name}</p>
          <p>{character.stats?.[5].base_stat}</p>
        </article>
        <h2></h2>
      </section>
    </div>
  );
};

export default CharacterCart;
