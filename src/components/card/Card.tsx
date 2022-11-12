import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Medicine } from '../../services/search.service';
import './card.css';


export const Card: FC<{ medicine: Medicine }> = ({ medicine }) => {
  return (
    <div className="card">
      <figure className="card__image">
        <img src={medicine.photo.url} alt={medicine.title} />
      </figure>

      <div className="card__body">
        <Link to={`medicine-details/${medicine.id}`}>
          <h4 className="card__title">{medicine.title}</h4>
        </Link>
        <p className="card__descrtiption">{medicine.shortDescription}</p>
      </div>
    </div>
  );
};
