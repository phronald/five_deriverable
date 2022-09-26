import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCart from "./CharacterCart";

const PokemonAll = () => {
  const name = useSelector((state) => state.userName);
  const [characterList, setCharacterList] = useState([]);
  const [types, setType] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setCharacterList(res.data.results))
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((res) => setType(res.data.results))
  }, []);

  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");
  const searchName = () => {
    navigate(`/pokemonid/${valueInput}`);
  };


  const searchType = (typeurl) => {
    axios
      .get(typeurl)
      .then((res) =>
        setCharacterList(res.data.pokemon.map((pokemon) => pokemon.pokemon))
      )
   console.log(characterList)
  };

  const [page, setPage] = useState(1);
  const characterPerPage = 12;
  const lastPag = page * characterPerPage;
  const firstPokemon = lastPag - characterPerPage;
  const pokemonsPagination = characterList.slice(firstPokemon, lastPag);
  const totalPages = Math.ceil(characterList.length / characterPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }


  return (
    <div className="All">
      <section className="decoration"></section>
      <header className="header decoration">
        <button className="menu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <main className="container_nav">
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>
            <select className="select"
            onChange={(e) => searchType(e.target.value)}>
        <option value=""> type</option>
        {types.map((type) => (
          <option value={type.url} key={type.url}>
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
        <h4>Welcome <span>{name}</span>, here you can find your favorite pokemon </h4>
      </section>
        <section className="section_search">


        <form onSubmit={searchName}>
        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
      </form>
        </section>

<section className="nextAndPrevius">


        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        next
      </button>
      <button onClick={() => setPage(page + 1)}>next</button>
      <div>
        {pagesNumbers.map((number) => (
          <button onClick={() => setPage(number)}>{number}</button>
        ))}
      </div>
</section>
<section>
</section>
      <main>
        <section className="container_pokemons" >
          <div className="container_cards" >
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
