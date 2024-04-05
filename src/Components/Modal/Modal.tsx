import { Beer } from "../../Data/types";
import "./Modal.scss";

type ModalProps = {
  onClose: () => void;
  beer: Beer;
};

const Modal: React.FC<ModalProps> = ({ onClose, beer }) => {
  const stopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div className="modal__overlay" onClick={onClose} data-testid="modal">
      <div className="modal" onClick={stopPropagation}>
        <button className="modal__close" onClick={onClose}>
          X
        </button>
        <div className="modal__content">
          <div className="modal__image">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="modal__details">
            <h2 className="modal__name">{beer.name}</h2>
            <p className="modal__tagline">{beer.tagline}</p>
            <p className="modal__description">{beer.description}</p>
            <div className="modal__ingredients">
              <h3>Ingredients:</h3>
              <p>{beer.ingredients.malt.map((malt) => malt.name).join(", ")}</p>
              <p>{beer.ingredients.hops.map((hop) => hop.name).join(", ")}</p>
              <p>Yeast: {beer.ingredients.yeast}</p>
            </div>
            <div className="modal__pairings">
              <h3>Food Pairings:</h3>
              <p>{beer.food_pairing.join(", ")}</p>
            </div>
            <p className="modal__brewers-tips">
              <strong>Brewer's Tips:</strong> {beer.brewers_tips}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
