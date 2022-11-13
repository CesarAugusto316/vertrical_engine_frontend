import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Medicine } from '../../services/search.service';
import Skeleton from 'react-loading-skeleton';
import './card.css';


export const Card: FC<{ medicine: Medicine }> = ({ medicine }) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <div className="card">
      <Link className="card__image link" to={`medicine-details/${medicine.id}`}>
        {!imageLoad &&
          <Skeleton
            height="100%"
            containerClassName="avatar-skeleton"
          />
        }
        <img onLoad={() => setImageLoad(true)} src={medicine.photo.url} alt={medicine.title} loading="lazy" />
      </Link>

      <div className="card__body">
        <Link className="link" to={`medicine-details/${medicine.id}`}>
          <h4 className="card__title" title={medicine.title}>{medicine.title}</h4>
        </Link>
        <p className="card__descrtiption">{medicine.shortDescription}</p>
      </div>
    </div>
  );
};
