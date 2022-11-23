import React from "react";
import RedBullDetails from "./RedBullDetails.jsx";
import Tangerine from "../../img/rbTangerine.jpg"
import Dragon from "../../img/rbDragonFruit.jpg"
import Tropical from "../../img/rbTropical.jpg"
import Blueberry from "../../img/rbBlueberry.jpg"

function Card () {
    return (
     <div className="">
        <RedBullDetails img={Tangerine} title="The Orange Edition" details="If you like the fruity-fresh taste of tangerine*, the Red Bull Orange Edition is perfect for you." button="Learn Orange" link="https://www.redbull.com/us-en/energydrink/red-bull-orange-edition" />
        <RedBullDetails img={Dragon} title="The Green Edition" details="The Red Bull Green Edition with the exotic taste of Dragon Fruit." button="Learn Green" link="https://www.redbull.com/us-en/energydrink/red-bull-green-edition"/>
        <RedBullDetails img={Tropical} title="The Yellow Edition" details="The Yellow Edition. Experience the exotic taste of tropical fruits*." button="Learn Yellow" link="https://www.redbull.com/us-en/energydrink/red-bull-yellow-edition" />
        <RedBullDetails img={Blueberry} title="The Blue Edition" details="The Red Bull Blue Edition. A classic, with the fruity taste of blueberry*." button="Learn Blue" link="https://www.redbull.com/us-en/energydrink/red-bull-blue-edition" />
 </div>
    )
 };

 export default Card;