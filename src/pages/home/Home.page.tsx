import { FC } from 'react';
import { MedicinesList } from '../../components';
import { useMedicines } from '../../context/MedicineProvider';
import './home.css';


export const Home: FC = () => {
  const { medicines } = useMedicines();

  return (
    <div className="home">
      <main className="main">
        <h1 className="home__title">Results {medicines.length > 0 && medicines.length}</h1>
        <MedicinesList />
      </main>
    </div>
  );
};
