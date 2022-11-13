import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import searchService, { Medicine } from '../../services/search.service';
import './medicine-details.css';


export const MedicineDetails: FC = () => {
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
      <h1 className="medicine-details__title">Medicine Details</h1>
      <Link className="link medicine-details_left-arrow" to="/">
        <FaArrowLeft />
        <span>BACK</span>
      </Link>

      {isLoading && <h4>medicines are loading...</h4>}
      {!isLoading && medicine && (
        <div className="card-details">
          <div className="card-details__body">
            <h2 className="card-details__title">{medicine.title}</h2>
            <p className="card-details__description">{medicine.description}</p>
          </div>

          <figure className="card-details__image">
            <img src={medicine.photo.url} alt={medicine.title} />
          </figure>
        </div>
      )}
    </div>
  );
};
