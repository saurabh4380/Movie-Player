import React from "react";
import "./Playlist.css";

const Playlist = ({name,year,poster, trailerLink, handleURLChange}) => {
  return (
    <div className="card_section">
      <div style={{cursor:"pointer"}} onClick={()=> {handleURLChange(`${trailerLink}`)}}>
        <div className="card">
          <img
            src={poster}
            width='100%'
            height='320px'
          />
          <div className="container">
            <h5 className="cardName" style={{textTransform:'uppercase',textAlign:"center"}}>{name}</h5>
            <p style={{textAlign:"center"}}>
              {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
