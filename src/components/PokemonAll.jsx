import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCart from "./CharacterCart";
import pokemon from "../assets/imagenes/pokebola.png";
import pokebolas from "../assets/imagenes/pokebolas.png";
import ash from "../assets/imagenes/ash.jpg";
const PokemonAll = () => {
  const name = useSelector((state) => state.userName);
  const [characterList, setCharacterList] = useState([]);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0 ")
      .then((res) => setCharacterList(res.data.results));
    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypes(res.data.results));
  }, []);
  const searchName = () => {
    navigate(`/pokemonid/${valueInput}`);
  };
  const searchType = (typeurl) => {
    axios
      .get(typeurl)
      .then((res) =>
        setCharacterList(res.data.pokemon.map((pokemon) => pokemon.pokemon))
      );
  };
  const [page, setPage] = useState(1);
  const characterPerPage = 20;
  const lastPag = page * characterPerPage;
  const firstPokemon = lastPag - characterPerPage;
  const pokemonsPagination = characterList.slice(firstPokemon, lastPag);
  const totalPages = Math.ceil(characterList.length / characterPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }
  const home = () => {
    navigate("/pokemonall");
  };

  return (
    <div className="All">
      <section className="decoration"></section>
      <header className="header decoration">
        <button className="menu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <main className="container_nav">
          <ul>
            <li className="link_first l" onClick={home}>
              <div>
                <img src={pokemon} alt="pokebola" className="pokebola" />
                <p>pokeapi</p>
              </div>
            </li>
            <li className="link_second l">
              <i className="fa-solid fa-shuffle "></i>
              <p>random</p>
            </li>
            <li className="link_third l">
              <i className="fa-solid fa-book fa-shuffle"></i>
              <p>history</p>
            </li>
            <li className="link_fourth l">
              <img src={ash} alt="" className="ash" />
              <p>charactes</p>
            </li>
            <li className="link_five l">
              <img src={pokebolas} alt="" className="pokebola" />
              <p>pokebolas</p>
            </li>
            <li className="link_six l">
              <i className="fa-solid fa-flask-vial l"></i>
              <p> laboratory</p>
            </li>
            <li className="link_seven">
              <select
                className="  select"
                onChange={(e) => searchType(e.target.value)}
              >
                <option value=""> types</option>
                {types.map((type) => (
                  <option  value={type.url} key={type.url}>
                    {type.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </main>
      </header>
      <section className="title">
        <h1>pokemon world</h1>
      </section>
      <section className="welcome">
        <h4>
          Welcome <span>{name}</span>, here you can find your favorite pokemon{" "}
        </h4>
      </section>
      <section className="section_search">
        <form onSubmit={searchName}>
          <input
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            className="input"
            placeholder="search"
          />
        </form>
      </section>
      <section className="nextAndPrevius">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          next
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
        <div>
          {pagesNumbers.map((number,index) => (
            <button className="button_next" key={index}   onClick={() => setPage(number)}>{number}</button>
          ))}
        </div>
      </section>
      <section></section>
      <main>
        <section className="container_pokemons">
          <div className="container_cards">
            {pokemonsPagination.map((character) => (
              <CharacterCart
                url={character.url ? character.url : pokemon.pokemon.url}
                key={character.url ? character.url : pokemon.pokemon.url}
              
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PokemonAll;
