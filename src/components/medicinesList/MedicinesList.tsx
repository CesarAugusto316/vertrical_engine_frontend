import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMedicines } from '../../context/MedicineProvider';
import { Card } from '../card/Card';
import './medicineList.css';


export const MedicinesList: FC = () => {
  const { medicines, isLoading } = useMedicines();

  return (
    <div
      className="medicines-list"
      role="list"
      title="medicines list"
    >
      <h1 className="medicines-list__title">Medicines List</h1>
      <div className="medicines-list__body">
        {medicines.map((medicine) => {
          return (
            isLoading ? <Skeleton key={medicine.id} className="card" /> :
              <Card key={medicine.id} medicine={medicine} />
          );
        })}
      </div>
    </div>
  );
};
