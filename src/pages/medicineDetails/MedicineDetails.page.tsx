import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import searchService, { Medicine } from '../../services/search.service';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './medicine-details.css';


export const MedicineDetails: FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [medicine, setMedicine] = useState({} as Medicine);

  useEffect(() => {
    searchService.getMedicineByID(id as string)
      .then(({ medicine }) => {
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
    <>
      <Link className="link medicine-details_left-arrow" to="/">
        <FaArrowLeft />
        <span>BACK</span>
      </Link>
      <div className="medicine-details">
        <h1 className="medicine-details__title">Medicine Details</h1>

        <div className="card-details">
          <div className="card-details__body">
            <h2 className="card-details__title">
              {isLoading ? <Skeleton /> : medicine.title}
            </h2>
            <p className="card-details__description">
              {isLoading ? <Skeleton count={3} /> : medicine.description}
            </p>
          </div>

          <figure className="card-details__image-box">
            {isLoading ? <Skeleton className="card-details__image" /> :
              <img
                className="card-details__image"
                src={medicine.photo.url}
                alt={medicine.title}
              />
            }
          </figure>
        </div>
      </div>
    </>
  );
};
