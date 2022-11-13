import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Medicine } from '../../services/search.service';
import Skeleton from 'react-loading-skeleton';
import './card.css';


export const Card: FC<{ medicine: Medicine }> = ({ medicine }) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <div className="card">
      <Link className="card__image-box link" to={`medicine-details/${medicine.id}`}>
        {!imageLoad &&
          <Skeleton
            className="card__image"
          />
        }
        <img
          className="card__image"
          onLoad={() => setImageLoad(true)}
          src={medicine.photo.url}
          alt={medicine.title}
        />
      </Link>

      <div className="card__body">
        <Link className="link" to={`medicine-details/${medicine.id}`}>
          <h4 className="card__title" title={medicine.title}>
            {medicine.title}
          </h4>
        </Link>
        <p className="card__descrtiption">{medicine.shortDescription}</p>
      </div>
    </div>
  );
};
