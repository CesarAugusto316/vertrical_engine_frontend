import { AxiosError } from 'axios';
import {
  FC, createContext, ReactNode, useContext, useState,
} from 'react';
import searchService, { Medicine } from '../services/search.service';


interface MedicinesContext {
  medicines: Medicine[],
  isLoading: boolean,
  fetchMedicines: (newState: string) => Promise<void>
}

const Context = createContext({} as MedicinesContext);

export const MedicineProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [isLoading, setIsloading] = useState(false);

  /**
   * 
   * @description this function gets called by the SubmitEventHandler
   * in the Search Component
   */
  const fetchMedicines = async (queryString: string) => {
    setIsloading(true);
    try {
      const { medicines } = await searchService.queryMedicine(queryString);
      setMedicines(medicines);
    } catch (error) {
      // use toastify here
      console.log((error as AxiosError));
    } finally {
      setIsloading(false);
    }
  };

  return (
    <Context.Provider value={{ medicines, isLoading, fetchMedicines }}>
      {children}
    </Context.Provider>
  );
};

export const useMedicines = () => {
  return useContext(Context);
};
