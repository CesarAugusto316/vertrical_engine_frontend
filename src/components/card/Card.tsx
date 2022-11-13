import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Medicine } from '../../services/search.service';
import './card.css';


export const Card: FC<{ medicine: Medicine }> = ({ medicine }) => {
  return (
    <div className="card">
      <Link className="card__image link" to={`medicine-details/${medicine.id}`}>
        <img src={medicine.photo.url} alt={medicine.title} />
      </Link>

      <div className="card__body">
        <Link className="link" to={`medicine-details/${medicine.id}`}>
          <h4 className="card__title">{medicine.title}</h4>
        </Link>
        <p className="card__descrtiption">{medicine.shortDescription}</p>
      </div>
    </div>
  );
};
