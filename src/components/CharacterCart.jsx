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
  const navigate = useNavigate();
  const colors = {
    grass: " linear-gradient(90deg, #9ebd13 0%, #008552 100%)",
    normal: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    fire: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    water: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    fighting: " linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
    ground:" linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    bug:" linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
    poison:" linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
    rock:"radial-gradient(circle, rgba(181,174,177,1) 0%, rgba(127,146,170,1) 100%)",
    ghost:"  linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    dark:"  linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    electric:"linear-gradient(90deg, #fcff9e 0%, #c67700 100%)",
    psychic:"linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    ice:"linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    dragon:" linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    fairy:"linear-gradient(90deg, #efd5ff 0%, #515ada 100%)"
  };
  return (
    <div
      className="item"
      onClick={() => navigate(`/pokemonid/${character.id}`)}
      style={{ background: colors[character.types?.[0].type.name] }}
    >
      <div className="container_img">
        <img
          src={character.sprites?.other.dream_world.front_default}
          alt=""
          className="img"
        />
      </div>
      <div className="fond"></div>
      <section className="data_pokemon">
        <section className="name_type">
          <h2>{character.name}</h2>
          <span>
            {character.types?.map((types) => (
              <b key={types.type.url}>{types.type.name},</b>
            ))}
            <p>type</p>
          </span>
        </section>

        <hr />
        <article className="container_data">
          <div>
            <p>{character.stats?.[0].stat.name}</p>
            <p className="hp">{character.stats?.[0].base_stat}</p>
          </div>
          <div>
            <p>{character.stats?.[1].stat.name}</p>
            <p className="red">{character.stats?.[1].base_stat}</p>
          </div>
        </article>
        <article className="container_data">
          <div>
            <p>{character.stats?.[2].stat.name}</p>
            <p>{character.stats?.[2].base_stat}</p>
          </div>
          <div>
            <p>{character.stats?.[5].stat.name}</p>
            <p>{character.stats?.[5].base_stat}</p>
          </div>
        </article>
        <h2></h2>
      </section>
    </div>
  );
};

export default CharacterCart;
