import React from "react";


const Character = props => {
    return(
        <div className="character">
             <h1>Name: {props.characters.name}</h1>
             <p>Height: {props.characters.height}</p> 
             <p>Mass: {props.characters.mass}</p>
             <p>Hair Color: {props.characters.hair_color}</p>
             <p>Skin Color: {props.characters.skin_color}</p>
        </div>
    );
}
export default Character;