import React, { Component } from "react";

import { Monster } from "../../../App";

import './card.styles.css'

type CardProps = {
  monster:Monster;
}

const Card = ({monster }:CardProps) => {
  const {id, name, email} = monster;
    return (
      <div className="card-container" >
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2/`}
        />
        <h2>{`Monster ${name}`}</h2>
        <p>{email}</p>
      </div>
    );
  }

export default Card;