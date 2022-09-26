import { useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterCart from "./components/CharacterCart";
import InputUser from "./components/InputUser";
import PokemonAll from "./components/PokemonAll";
import PokemonId from "./components/PokemonId";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <div className="App">
       
       {

        /*
        
        <Link to="/pokemonall">pokemon all</Link>
        <br />
        <Link to="/pokemonid/:id">pokemon id</Link>
        <br />
        <Link to="/">home</Link>
        <br />
    
        */
       }
          
        <Routes>
          <Route path="/" element={<InputUser />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokemonall" element={<PokemonAll />} />
            <Route path="/pokemonid/:id" element={<PokemonId />} />
            <Route path="/Charactercart" element={<CharacterCart/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
