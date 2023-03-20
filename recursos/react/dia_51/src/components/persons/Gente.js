import React, { useState } from "react";
import Gent from "./gente/gent";
const Gente = () => {
  const [gente, setgente] = useState([
    {
      id: 1,
      name: "Kevin",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "Alex",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Ben",
      role: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
  ]);

  return (
    <div className="row">
      {gente.map(gentes =>{
        return  <Gent key={gentes.id} name={gentes.name} img={gentes.img} role={gentes.role}/>
        
      })}
    </div>
  );
};

export default Gente;