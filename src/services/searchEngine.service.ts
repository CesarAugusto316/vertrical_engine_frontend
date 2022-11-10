import axios from 'axios';


export interface Medicine {
  title: string,
  photo: string,
  description: string,
  shortDescription: string
}

export class SearchEngine {
  apiUrl: string = import.meta.env.API_URL;

  async getMedicine(medicineQuery: string): Promise<Medicine[]> {
    return new Promise((resolve, reject) => {
      axios.get<Medicine[]>(this.apiUrl, {
        params: {
          s: medicineQuery
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
}
