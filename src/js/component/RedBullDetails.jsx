import React from "react";


function RedBullDetails(props) {
return (
        <div className="card" style={{width:"18rem"}}>
      <img src={props.img} className="cardImage" alt="Tangerine" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.details}</p>
        <a href={props.link} className="btn btn-primary">{props.button}</a>
      </div>
    </div>
)
};

export default RedBullDetails;