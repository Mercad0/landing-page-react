import React from "react";
import Tangerine from "../../img/rbTangerine.jpg";
import Dragon from "../../img/rbDragonFruit.jpg";
import Tropical from "../../img/rbTropical.jpg";
import Blueberry from "../../img/rbBlueberry.jpg";

function Card() {
 const details = [
    {
      img: Tangerine,
      title: "The Orange Edition",
      someText:
        "If you like the fruity-fresh taste of tangerine*, the Red Bull Orange Edition is perfect for you.",
      button: "Learn Orange",
      link: "https://www.redbull.com/us-en/energydrink/red-bull-orange-edition",
    },
    {
      img: Dragon,
      title: "The Green Edition",
      someText:
        "The Red Bull Green Edition with the exotic taste of Dragon Fruit.",
      button: "Learn Green",
      link: "https://www.redbull.com/us-en/energydrink/red-bull-green-edition",
    },
    {
      img: Tropical,
      title: "The Yellow Edition",
      someText:
        "The Yellow Edition. Experience the exotic taste of tropical fruits*.",
      button: "Learn Yellow",
      link: "https://www.redbull.com/us-en/energydrink/red-bull-yellow-edition",
    },
    {
      img: Blueberry,
      title: "The Blue Edition",
      someText:
        "The Red Bull Blue Edition. A classic, with the fruity taste of blueberry*.",
      button: "Learn Blue",
      link: "https://www.redbull.com/us-en/energydrink/red-bull-blue-edition",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {details.map((details, index) => (
        <RedBullDetails key={index} {...details} />
      ))}
    </div>
  );
}

export default Card;


function RedBullDetails({ img, title, someText, button, link }) {
   return (
     <div className="card" style={{ width: "18rem" }}>
       <img src={img} className="cardImage" alt={title} />
       <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{someText}</p>
         <a href={link} className="btn btn-primary">
           {button}
         </a>
       </div>
     </div>
   );
 }
