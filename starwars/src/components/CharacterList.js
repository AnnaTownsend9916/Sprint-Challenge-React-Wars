import React from "react";
import Character from "./Character";

const CharacterList = props => {
    return(
      
        <div className="character-list">
        {props.starwarsChars.map(item => (
            <Character 
            key={item.name}
            characters={item}
             />
          ))}
          <h1>
            I AM A CHArACTER List
          </h1>
         
        </div>
    );
}
export default CharacterList;