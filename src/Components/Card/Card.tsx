import { useState } from "react";
import "./Card.scss";

type CardProp = {
  name: string;
  img: string;
  tagline: string;
  description: string;
};

const Card = ({ name, img, tagline, description }: CardProp) => {
  let truncatedDescription =
    description.length > 450
      ? description.substring(0, 450) + "..."
      : description;
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt={name} />
      </div>
      <div className="card__details">
        <h2 className="card__name">{name}</h2>
        <p className="card__tagline">{tagline}</p>
        <p className="card__description">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default Card;
