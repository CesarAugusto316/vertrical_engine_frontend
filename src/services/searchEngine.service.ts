import axios from 'axios';


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

class SearchService {
  private apiUrl: string = import.meta.env.VITE_API_URL;

  async queryMedicine(medicineQuery: string): Promise<{ medicines: Medicine[] }> {
    return new Promise((resolve, reject) => {
      axios.get(this.apiUrl + '/medicines/search', {
        params: {
          title: medicineQuery
        }
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  async getAllMedicines(): Promise<{ medicines: Medicine[] }> {
    console.log(this.apiUrl);
    return new Promise((resolve, reject) => {
      axios.get(this.apiUrl + '/medicines')
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default new SearchService();
