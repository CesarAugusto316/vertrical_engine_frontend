import { FC } from 'react';
import { useMedicines } from '../../context/MedicineProvider';
import { Card } from '../card/Card';
import './medicineList.css';


export const MedicinesList: FC = () => {
  const { medicines, isLoading } = useMedicines();

  return (
    <div className="medicines-list" role="list" title="medicines list">
      <h1 className="medicines-list__title">Medicines List</h1>
      <div className="medicines-list__body">
        {isLoading && <h4>medicines are loading...</h4>}
        {!isLoading && medicines.map((medicine) => {
          return (
            <Card key={medicine.id} medicine={medicine} />
          );
        })}
      </div>
    </div>
  );
};
