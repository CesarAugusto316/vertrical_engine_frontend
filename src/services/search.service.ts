import axios, { AxiosError } from 'axios';


export interface Medicine {
  id: number,
  title: string,
  photo: {
    url: string,
    id: string
  },
  description: string,
  shortDescription: string
}

/**
 * 
 * Since we are using a free hosting service for the REST API, the API is
 * set to sleep after 15 minutues of inactivity, if you face any issue, please
 * just reload the page.
 */
class SearchService {
  private http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 20_000,
  });

  async queryMedicine(medicineQuery: string): Promise<{ medicines: Medicine[] }> {
    return new Promise((resolve, reject) => {
      this.http.post(`/medicines/search?title=${medicineQuery}`,)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  async getAllMedicines(): Promise<{ medicines: Medicine[] }> {
    return new Promise((resolve, reject) => {
      this.http.get('/medicines')
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  async getMedicineByID(id: string): Promise<{ medicine: Medicine }> {
    return new Promise((resolve, reject) => {
      this.http.get(`/medicines/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }
}

export default new SearchService();
