import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import pokeimagen from "../assets/imagenes/pokeimagen.png";

const PokemonId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <div className="home_id">
      <div className="title_id">
        <div className="container_imgid">
          <img src={character.sprites?.other.home.front_default} />
        </div>
      </div>
      <section className="container_id_pokemons">
        <section></section>

        <section className="container_dataid">
          <section className="container_1">
            <div className="article">
              <img src={pokeimagen} alt="" />
            </div>
            <article className="container_data_pokemon">
              <div className="wight_id">
                <b> {character.weight} </b>
                <p>weight</p>
              </div>
              <div className="height_id">
                <b>{character.height}</b>
                <p> height</p>
              </div>
            </article>
            <h2>{character.name}</h2>
            <hr />
          </section>

          <div className="type">
            <h2>types</h2>
            <b>{character.types?.[0]?.type.name}</b>
            {" / "}
            <b>{character.types?.[1]?.type.name}</b>
          </div>
          <div className="abylities">
            <h2>abylities</h2>
            <b>{character.abilities?.[0]?.ability.name}</b>
            {" / "}
            <b>{character.abilities?.[1]?.ability.name}</b>
          </div>

          <article className="stats_base">
            <h2> stats base </h2>
            <div className="container_base">
              <div className="container_names_base">
                  <div className="name_ids"><p>hp</p></div>
                  <div className="name_ids"><p>speed</p></div>
                  <div className="name_ids"><p>attack</p></div>
                  <div className="name_ids"><p>Defense</p></div>
              </div>
              <div className="container_datas">
                <div className="hp_id">
                  <div className="range_id">
                    <b>{character.stats?.[0].base_stat}</b>
                    / <b>150</b>
                  </div>
                </div>
                <div className="speed_id">
                <div className="range_id">
                <b>{character.stats?.[1].base_stat}</b>
                    / <b>150</b>
                </div>
                </div>
                <div className="attack_id">
                <div className="range_id">
                <b>{character.stats?.[2].base_stat}</b>
                    / <b>150</b>
                </div>
                </div>
                <div className="defense_id">
                <div className="range_id">
                <b>{character.stats?.[3].base_stat}</b>
                    / <b>150</b>
                </div>
                   </div>
              </div>
            </div>
          </article>
        </section>

        <section className="container_2">
          <h2>moves</h2>
          <div className="moves">
            {character.moves?.map((move) => (
              <li key={move.move.url}>{move.move.name}</li>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default PokemonId;
