import { useState } from "react";
import "./Card.scss";
import Modal from "../Modal/Modal";
import beers from "../../Data/beers";
import { Beer } from "../../Data/types";

type CardProp = {
  id: number;
  name: string;
  img: string;
  tagline: string;
  description: string;
};

const Card = ({ name, img, tagline, description, id }: CardProp) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let truncatedDescription =
    description.length > 450
      ? description.substring(0, 450) + "..."
      : description;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const beer = beers.find((beer) => beer.id === id);
  return (
    <div
      className={`card ${isModalOpen ? "modal-open" : ""}`}
      onClick={openModal}
      data-testid="card"
    >
      <div className="card__image">
        <img src={img} alt={name} />
      </div>
      <div className="card__details">
        <h2 className="card__name">{name}</h2>
        <p className="card__tagline">{tagline}</p>
        <p className="card__description">{truncatedDescription}</p>
      </div>
      {isModalOpen && <Modal onClose={closeModal} beer={beer as Beer} />}
    </div>
  );
};

export default Card;
