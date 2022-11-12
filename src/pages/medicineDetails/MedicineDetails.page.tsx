import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import searchService from '../../services/search.service';


export const MedicineDetails: FC = () => {
  const { id } = useParams();

  useEffect(() => {
    searchService.getMedicineByID(id as string).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div className="medicine-details">
      <h1>Medicine details</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
