import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/userName.slice";
import input from "../assets/imagenes/input.jpg"
const InputUser = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const distpatch = useDispatch();
  const [userName, setUserName] = useState("");

  const distpatchUserName = () => {
    distpatch(changeName(userName));
    navigate("/pokemonall");
  };

  return (
    <div>
      <div className="main_container">

        <div className="container_input">

            <h1>welcome trainer !!</h1>
        <img src={input} alt=""  className="img"/>
          <div className="section_input">
            <form onSubmit={handleSubmit(distpatchUserName)}>
              <input
                type="text"
                value={userName}
                placeholder="write your name here"
                onChange={(e) => setUserName(e.target.value)}
              />
                <button onClick={distpatchUserName}>supmit</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InputUser;
