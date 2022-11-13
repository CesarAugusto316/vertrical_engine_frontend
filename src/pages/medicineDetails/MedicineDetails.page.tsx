import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import searchService, { Medicine } from '../../services/search.service';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './medicine-details.css';


export const MedicineDetails: FC = () => {
  const [imageLoad, setImageLoad] = useState(false);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [medicine, setMedicine] = useState({} as Medicine);

  useEffect(() => {
    searchService.getMedicineByID(id as string)
      .then(({ medicine }) => {
        console.log(medicine);
        setMedicine(medicine);
      })
      .catch(error => {
        // use react-toastify
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="medicine-details">
      <Skeleton />
      <h1 className="medicine-details__title">Medicine Details</h1>
      <Link className="link medicine-details_left-arrow" to="/">
        <FaArrowLeft />
        <span>BACK</span>
      </Link>

      {/* There is little bug here, skeleton is not rendering */}

      {isLoading && <Skeleton className="card-details" />}
      {!isLoading && medicine && (
        <div className="card-details">
          <div className="card-details__body">
            <h2 className="card-details__title">{medicine.title}</h2>
            <p className="card-details__description">{medicine.description}</p>
          </div>

          <figure className="card-details__image">
            {!imageLoad &&
              <Skeleton
                height="100%"
                containerClassName="avatar-skeleton"
              />
            }
            <img onLoad={() => setImageLoad(true)} src={medicine.photo.url} alt={medicine.title} loading="lazy" />
          </figure>
        </div>
      )}
    </div>
  );
};
